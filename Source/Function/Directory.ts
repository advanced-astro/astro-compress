import type Interface from "../Interface/Directory.js";

/**
 * @module Directory
 *
 */
export default (async (...[Path]) => {
	let Directory = (await import("node:path"))
		.normalize((await import("node:path")).parse(Path).dir)
		.replace(/\\/g, "/")
		.replace((await import("@Function/Integration.js")).System, "");

	if (!Directory.endsWith("/")) {
		Directory += "/";
	}

	return Directory;
}) satisfies Interface as Interface;
