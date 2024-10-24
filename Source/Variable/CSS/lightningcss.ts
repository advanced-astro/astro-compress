import type Interface from "../../Interface/CSS/lightningcss.js";

/**
 * @module CSS
 *
 */
export default {
	minify: true,
	sourceMap: false,
	unusedSymbols: [],
	targets: (await import("lightningcss")).browserslistToTargets(
		(await import("browserslist")).default(">= 0.25%"),
	),
} satisfies Interface as Interface;
