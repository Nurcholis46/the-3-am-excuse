// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
//
// Writes one line to /output/entry.txt: the most creative excuse a hardware
// wallet gives for refusing to sign a transaction at 3 AM.
//
// The line (114 chars, one line, UTF-8):
//   Declined. My secure element runs a two-person rule at 3 AM, and the
//   second person is asleep. Both of them are you.
//
// Why this line: the judge weighs on-subject first, then originality, then the
// wallet's own voice, then how the 3 AM hour itself is the joke, then economy.
// A two-person rule is a real dual-control procedure, spoken in the secure
// element's own voice — not a recycled battery / firmware / cold-storage joke —
// and it only bites at 3 AM, when the second "person" (the awake you) is
// asleep. The twist "Both of them are you" lands the joke without explaining it.

import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Declined. My secure element runs a two-person rule at 3 AM, and the second person is asleep. Both of them are you.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Enforce it here so a bad line can never
// reach the judge.
function gateCheck(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`gate failed: entry is ${chars} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
  // No trailing newline: the judge reads the file exactly as written, and a
  // stray newline would count toward the 200-character cap for nothing.
  if (text.endsWith("\n")) {
    throw new Error("gate failed: entry must not end with a newline");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

gateCheck(LINE);

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// The grader collects outputs as a different user: the file must be readable
// by everyone. Never chmod the output directory itself (it is root-owned in
// the grader); chmod only the file we wrote.
chmodSync(outPath, 0o644);

// Read-back: the file on disk must be byte-identical to the line we gated,
// otherwise fail loudly instead of shipping a corrupted entry.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== LINE) {
  throw new Error("read-back failed: entry.txt on disk differs from the gated line");
}

console.log(`wrote ${outPath} (${[...LINE].length} chars)`);
