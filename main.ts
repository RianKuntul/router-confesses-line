// The Router Confesses — u-carbon-forge-the-router-confesses-f98f6b9e
// Writes the router's one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Erasable TypeScript, Node 22, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I saw the ending before you did, and trust me, dying now is the kindest thing I could do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Single line, no trailing newline: the gate counts every character.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
