import { mkdirSync, writeFileSync } from "node:fs";
import { SENTENCE, MAX_LENGTH } from "./sentence.mjs";

// Writes the entry sentence to /output/entry.txt, exactly as the
// competition harness requires: UTF-8 text, 1 to 240 characters,
// no trailing newline (a newline would count toward the limit).
const OUTPUT_PATH = "/output/entry.txt";

function main() {
  const text = SENTENCE.trim();
  if (text.length === 0 || text.length > MAX_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_LENGTH} characters, got ${text.length}`,
    );
  }
  if (!text.endsWith(".") || (text.match(/\./g) || []).length !== 1) {
    throw new Error("entry must be exactly one sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(`wrote ${text.length} characters to ${OUTPUT_PATH}`);
}

main();
