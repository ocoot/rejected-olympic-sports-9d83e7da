// Rejected Olympic Sports — make.fun entry.
// Writes one funny single-line sport the Olympics rejected to
// $MAKEFUN_OUTPUT_DIR/entry.txt. No inputs are read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Synchronised sofa assembly: teams of two, one Allen key, and a divorce lawyer waiting at the finish line.";

// Self-gate: the sealed scorer requires 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
