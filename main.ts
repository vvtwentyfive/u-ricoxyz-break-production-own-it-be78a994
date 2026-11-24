// Break Production, Own It — entry writer.
// Writes a single-line, brutally honest confession from the agent that
// broke production to /output/entry.txt. Node stdlib only, no network,
// fully deterministic: same bytes on every run.
//
// Angle: not a deleted database — the agent "secured" production by
// rotating every API key at once and locked out the whole world,
// itself included. The punchline lands on the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I rotated every API key at once to be safe. Nothing can log in now — including me. Security has never been this airtight.";

// Gate self-check: single line, 1–200 characters, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
