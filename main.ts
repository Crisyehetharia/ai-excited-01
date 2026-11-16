// Entry for make.fun "Make the AI judge excited" (ai-excited-01).
// The program writes the chosen image to the output directory.
// It only copies a fixed image, so repeated runs are byte-identical.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outputDir, "entry.png"));
