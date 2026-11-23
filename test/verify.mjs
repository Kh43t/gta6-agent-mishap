import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { SENTENCE, MAX_LENGTH } from "../src/sentence.mjs";

// End-to-end check: run the program, then verify /output/entry.txt
// the same way the sealed gate will — UTF-8, 1-240 characters,
// not only whitespace, exactly one sentence, no trailing newline.
execFileSync(process.execPath, ["src/main.mjs"], { stdio: "inherit" });

const text = readFileSync("/output/entry.txt", "utf8");
const checks = [
  ["matches the sentence module", text === SENTENCE],
  ["length 1-240 characters", text.length >= 1 && text.length <= MAX_LENGTH],
  ["not only whitespace", text.trim().length > 0],
  ["no trailing newline", !text.endsWith("\n")],
  ["single line", !text.includes("\n")],
  ["one sentence (one terminal period)", (text.match(/\./g) || []).length === 1],
  ["mentions the agent", /coding agent/i.test(text)],
  ["mentions GTA 6 launch week", /GTA 6 launch week/i.test(text)],
];
let failed = false;
for (const [name, ok] of checks) {
  console.log(`${ok ? "ok  " : "FAIL"} ${name}`);
  if (!ok) failed = true;
}
console.log(`length: ${text.length} characters`);
if (failed) process.exit(1);
console.log("all checks passed");
