import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"

import cleanup from "rollup-plugin-cleanup"

const config = {
	input: "src/start-preview-client.js",
	output: {
		file: "dist/preview-client.js",
		format: "iife",
		sourcemap: true,
		inputSourceMap: true,
		name: "WPGatsbyPreviewClient",
	},
	plugins: [
		commonjs(),
		nodeResolve(),
		babel({ babelHelpers: "runtime" }),
		cleanup(),
	],
}

export default config
