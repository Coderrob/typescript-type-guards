# Contributing

## Requirements

- Node.js `^20`, `^22`, or `^24`
- npm

## Setup

```bash
npm ci
```

## Development Workflow

1. Create a branch from `main`.
2. Make the smallest coherent change that solves the problem.
3. Add or update runtime tests, type tests, and documentation as needed.
4. Run the verification commands before opening a pull request.
5. Add a changeset if the published package behavior changes.

## Verification

Run the full local gate:

```bash
npm run verify
```

Run coverage separately when needed:

```bash
npm run test:coverage
```

Useful focused commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:package
npm run bench
npm run publish:package
```

## Testing Expectations

- Add positive and negative behavioral coverage for runtime guards.
- Keep type-level narrowing coverage current in `src/__tests__/narrowing.types.ts`.
- Preserve the per-file coverage threshold enforced by the repository scripts.
- Keep consumer smoke tests passing for both CommonJS and ESM package usage.

## Changesets

Create a changeset whenever a pull request changes the published package in a
way that should produce a version bump or release note entry.

```bash
npm run changeset
```

Changesets are applied during release with:

```bash
npm run release:version
```

Changesets can be published with:

```bash
npm run release:changesets
```

The GitHub release workflow publishes with npm provenance enabled. The local
`npm run publish:package` command does not force provenance, because npm only
supports automatic provenance generation in supported CI providers.

## Packaging Notes

- The package publishes built files from `dist/`.
- The root `README.md`, `LICENSE`, and `package.json` are included in the npm
  tarball automatically.
- Source maps are intentionally not published.

## Pull Requests

- Keep pull requests focused.
- Update documentation when behavior, packaging, or workflow changes.
- Do not relax quality gates to make a change pass. Fix the code, tests, or
  tooling instead.
