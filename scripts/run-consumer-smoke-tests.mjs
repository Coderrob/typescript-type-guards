import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SCRIPT_PATH = fileURLToPath(import.meta.url);
const SCRIPT_DIR = dirname(SCRIPT_PATH);
const REPO_ROOT = resolve(SCRIPT_DIR, '..');
const FIXTURES_DIR = resolve(REPO_ROOT, 'fixtures');
const TEMP_ROOT = resolve(REPO_ROOT, '.tmp', 'consumer-smoke');
const PACKAGE_DIRECTORY = resolve(
  TEMP_ROOT,
  'node_modules',
  '@coderrob',
  'typescript-type-guards',
);
const PACKAGED_PATHS = ['dist', 'LICENSE', 'README.md', 'package.json'];
const require = createRequire(import.meta.url);

prepareTempDirectory();
installPackagedFiles();
await runFixture('cjs-consumer', 'smoke.mjs');
await runFixture('esm-consumer', 'smoke.mjs');
rmSync(TEMP_ROOT, { force: true, recursive: true });

/**
 * Recreates the temporary workspace used for consumer smoke tests.
 *
 * @returns {void}
 */
function prepareTempDirectory() {
  rmSync(TEMP_ROOT, { force: true, recursive: true });
  mkdirSync(PACKAGE_DIRECTORY, { recursive: true });
}

/**
 * Copies the publishable package files into a temporary node_modules directory.
 *
 * @returns {void}
 */
function installPackagedFiles() {
  for (const packagedPath of PACKAGED_PATHS) {
    const sourcePath = resolve(REPO_ROOT, packagedPath);
    const targetPath = resolve(PACKAGE_DIRECTORY, basename(packagedPath));
    cpSync(sourcePath, targetPath, { recursive: true });
  }
}

/**
 * Copies a consumer fixture into the temporary workspace and executes it.
 *
 * @param {string} fixtureName - The fixture directory name.
 * @param {string} entryFile - The fixture entry file to execute.
 * @returns {Promise<void>} Completes when the fixture finishes successfully.
 */
async function runFixture(fixtureName, entryFile) {
  const fixtureTemplate = resolve(FIXTURES_DIR, fixtureName);
  const fixtureWorkingDirectory = resolve(TEMP_ROOT, fixtureName);
  const fixtureEntryPath = resolve(fixtureWorkingDirectory, entryFile);

  cpSync(fixtureTemplate, fixtureWorkingDirectory, { recursive: true });

  if (entryFile.endsWith('.cjs')) {
    require(fixtureEntryPath);
    return;
  }

  await import(pathToFileURL(fixtureEntryPath).href);
}
