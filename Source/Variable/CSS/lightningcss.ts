import type { Targets } from "lightningcss";

import type Interface from "../../Interface/CSS/lightningcss.js";

/**
 * @module CSS
 *
 */
export default {
	minify: true,
	sourceMap: false,
	unusedSymbols: [],
	targets: process.env["TARGETS"] as Targets,
} satisfies Interface as Interface;
