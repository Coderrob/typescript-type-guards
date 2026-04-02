import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const SCRIPT_PATH = fileURLToPath(import.meta.url);
const SCRIPT_DIR = dirname(SCRIPT_PATH);
const REPO_ROOT = resolve(SCRIPT_DIR, '..');
const FIXTURES_DIR = resolve(REPO_ROOT, 'fixtures');
const TEMP_ROOT = resolve(REPO_ROOT, '.tmp', 'consumer-smoke');
const NPM_COMMAND = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const PACK_DESTINATION = join(TEMP_ROOT, 'pack');
const CONSUMER_FIXTURES = ['cjs-consumer', 'esm-consumer'];

prepareTempDirectory();

try {
  const tarballPath = packLocalPackage();
  runConsumerFixtures(tarballPath);
} finally {
  rmSync(TEMP_ROOT, { force: true, recursive: true });
}

/**
 * Recreates the temporary workspace used for consumer smoke tests.
 *
 * @returns {void}
 */
function prepareTempDirectory() {
  rmSync(TEMP_ROOT, { force: true, recursive: true });
  mkdirSync(PACK_DESTINATION, { recursive: true });
}

/**
 * Packs the current repository into a tarball for local fixture installation.
 *
 * @returns {string} The absolute path to the generated tarball.
 */
function packLocalPackage() {
  const result = runCommand(
    [NPM_COMMAND, 'pack', '--json', '--pack-destination', PACK_DESTINATION],
    REPO_ROOT,
  );
  const packResults = JSON.parse(result.stdout);
  const tarballName = packResults.at(0)?.filename;
  if (typeof tarballName !== 'string') {
    throw new Error('Unable to determine packed tarball filename');
  }

  return resolve(PACK_DESTINATION, tarballName);
}

/**
 * Installs the packed tarball into each fixture and runs its smoke script.
 *
 * @param {string} tarballPath - The absolute path to the packed tarball.
 * @returns {void}
 */
function runConsumerFixtures(tarballPath) {
  for (const fixtureName of CONSUMER_FIXTURES) {
    const fixtureTemplate = resolve(FIXTURES_DIR, fixtureName);
    const fixtureWorkingDirectory = resolve(TEMP_ROOT, fixtureName);
    cpSync(fixtureTemplate, fixtureWorkingDirectory, { recursive: true });
    installPackedPackage(fixtureWorkingDirectory, tarballPath);
    runCommand([NPM_COMMAND, 'run', 'smoke'], fixtureWorkingDirectory);
  }
}

/**
 * Installs the packed tarball into a copied consumer fixture.
 *
 * @param {string} fixtureWorkingDirectory - The copied fixture directory.
 * @param {string} tarballPath - The packed tarball to install.
 * @returns {void}
 */
function installPackedPackage(fixtureWorkingDirectory, tarballPath) {
  runCommand(
    [NPM_COMMAND, 'install', '--no-audit', '--no-fund', tarballPath],
    fixtureWorkingDirectory,
  );
}

/**
 * Runs a command synchronously and throws when it fails.
 *
 * @param {readonly string[]} command - The executable followed by its arguments.
 * @param {string} cwd - The working directory for the command.
 * @returns {{ stdout: string }} The captured standard output.
 * @throws {Error} When the command exits with a non-zero status.
 */
function runCommand([command, ...args], cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    shell: process.platform === 'win32',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      [
        `Command failed: ${command} ${args.join(' ')}`,
        (result.stdout ?? '').trim(),
        (result.stderr ?? '').trim(),
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  return { stdout: result.stdout ?? '' };
}
