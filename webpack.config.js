const path = require("path");

module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							svgo: false, // disable svgo
							svgoConfig: {
								plugins: [
									{ removeViewBox: false }, // don't remove the viewbox attribute from the SVG
									{ cleanupIDs: false }, // don't remove IDs from the SVG
								],
							},
							// add this line to bypass the namespace tag error
							throwIfNamespace: false,
						},
					},
					// add this loader to handle the SVG file as a URL
					{
						loader: "svg-url-loader",
						options: {
							// make sure to encode the SVG file as a data URL
							encoding: "base64",
						},
					},
				],
			},
			// ...
		],
	},
};
