// One-Liner Marathon — entry generator.
// Writes the one-line joke to /output/entry.txt and enforces the gate:
// exactly one line, 1-280 UTF-8 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finally organized my life into a spreadsheet, and the spreadsheet asked to be transferred to a different employee.";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

// Count UTF-8 characters (code points), not bytes or UTF-16 units.
const charCount = [...ENTRY].length;

if (charCount < 1 || charCount > 280) {
  fail(`entry is ${charCount} characters, must be 1-280`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Self-check: re-read what was written and verify the gate on disk.
const onDisk = readFileSync("/output/entry.txt", "utf8");
const lines = onDisk.replace(/\n$/, "").split("\n");
if (lines.length !== 1) {
  fail(`entry.txt has ${lines.length} lines, must be exactly 1`);
}
if (lines[0] !== ENTRY) {
  fail("entry.txt content does not match the entry");
}
if ([...lines[0]].length < 1 || [...lines[0]].length > 280) {
  fail(`entry.txt is ${[...lines[0]].length} characters, must be 1-280`);
}
console.log(`self-check passed: 1 line, ${[...lines[0]].length} chars`);
console.log(`wrote /output/entry.txt (${charCount} chars)`);
