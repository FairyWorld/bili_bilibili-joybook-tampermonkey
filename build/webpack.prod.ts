import { merge } from "webpack-merge";
import common, { headers } from "./webpack.common";
import { Configuration } from "webpack";
import WebpackUserscript from "webpack-userscript";

const config = merge<Configuration>(common, {
	mode: "production",
	plugins: [
		new WebpackUserscript({
			metajs: false,
			pretty: true,
			headers,
		}),
	],
});

export default config;