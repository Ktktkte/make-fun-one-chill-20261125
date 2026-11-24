// One Line, One Chill — writes a single sentence of horror to /output/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const LINE =
  "The voicemail from my own number was timestamped tomorrow, and the voice on it was already apologising for what I haven't done yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "out");

// Gate: exactly one line, 1–200 characters (excluding the trailing newline).
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1–200 chars, single line (got ${LINE.length})`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
