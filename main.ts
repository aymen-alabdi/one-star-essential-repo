import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final: the turn arrives after a complaint read straight.
const ENTRY = "Oxygen: one star. I never agreed to this subscription, and it renews every four seconds.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
