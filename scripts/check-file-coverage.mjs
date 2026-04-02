import { readFileSync } from 'node:fs';

const COVERAGE_SUMMARY_PATH = new URL(
  '../coverage/coverage-summary.json',
  import.meta.url,
);
const COVERAGE_THRESHOLD = 95;
const METRICS = ['branches', 'functions', 'lines', 'statements'];
const TOTAL_KEY = 'total';

/**
 * Returns a list of per-file coverage failures.
 *
 * @param {Record<string, Record<string, { pct?: number }>>} coverageSummary - The parsed
 * coverage summary keyed by file path.
 * @returns {string[]} A list of human-readable threshold failures.
 */
function collectFailures(coverageSummary) {
  return Object.entries(coverageSummary).reduce(
    (failures, [filePath, fileCoverage]) => {
      if (filePath === TOTAL_KEY) return failures;
      const nextFailures = METRICS.flatMap((metric) => {
        const pct = fileCoverage[metric]?.pct ?? 0;
        return pct < COVERAGE_THRESHOLD
          ? [`${filePath}: ${metric} ${pct}% < ${COVERAGE_THRESHOLD}%`]
          : [];
      });
      return [...failures, ...nextFailures];
    },
    [],
  );
}
const coverageSummary = JSON.parse(readFileSync(COVERAGE_SUMMARY_PATH, 'utf8'));
const failures = collectFailures(coverageSummary);
if (failures.length > 0)
  throw new Error(
    `Per-file coverage check failed:\n- ${failures.join('\n- ')}`,
  );
