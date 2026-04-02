# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

This repository uses [Changesets](https://github.com/changesets/changesets) to
manage versioning and changelog generation. Release entries are created from
merged changesets during the release process.

## Unreleased

- No unreleased entries yet.

## 1.0.0 - 2026-04-02

### Added

- Initial public release of `@coderrob/typescript-type-guards`.
- A reusable TypeScript type guard library with primitive, numeric,
  collection, object-like, and utility guards.
- Generic factory helpers for constructor-based and enum-based narrowing via
  `createTypeGuard` and `createEnumGuard`.
- Behavioral runtime tests with strong coverage expectations for positive and
  negative guard usage.
- Repository quality tooling for formatting, linting, typechecking, duplicate
  detection, and automated package verification.
- npm packaging support files, including publish-oriented ignore rules and
  package metadata hardening.
- Project documentation and branding, including the package README and logo.

### Changed

- Expanded the guard surface and test coverage as the library matured toward
  the `1.0.0` release.
- Refined npm publishing behavior and package build output for release
  readiness.

### Security

- Updated transitive dependencies through Dependabot-driven maintenance,
  including `brace-expansion`, `flatted`, `picomatch`, and `handlebars`.
