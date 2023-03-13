/** @type {import("tailwindcss").Config} */
let colors = require("tailwindcss/colors");
colors = { ...colors, ...{ transparent: "transparent" } };

module.exports = {
	enabled: true,
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./public/**/*.html",
		"./public/*.html",
		"./src/**/*.js",
		"./src/*.js",
		"./src/**/*.html",
		"./src/*.html",
		"./public/**/*.js",
		"./public/*.js",
	],
	theme: {
		extend: {
			colors: {
				// Configure your color palette here
				"custom-main": "#787878",
				"custom-primary": "#079EFF",
				"custom-secondary": "#FFFFFF",
				"custom-olive": "#D3D800",
				"custom-antique": "#CA9E67",
				"custom-saddleBrown": "#7D4E24",
				"custom-orange": "#FF9600",
				"custom-gray": "#E6E6E6",
				colors,
			},

			fontSize: {
				"custom-xsm": "0.4rem",
				"custom-sm": "0.5rem",
				"custom-sm-1": "0.6rem",
				"custom-sm-2": "0.7rem",
				"custom-sm-3": "0.8rem",
				"custom-sm-4": "0.9rem",
				55: "55rem",
			},

			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				display: ["Roboto Slab", "sans-serif"],
				body: ["Poppins", "sans-serif"],
			},

			minHeight: {
				"screen-75": "75vh",
			},
			opacity: {
				80: ".8",
			},
			zIndex: {
				2: 2,
				3: 3,
			},
			inset: {
				"-100": "-100%",
				"-225-px": "-225px",
				"-160-px": "-160px",
				"-150-px": "-150px",
				"-94-px": "-94px",
				"-50-px": "-50px",
				"-29-px": "-29px",
				"-20-px": "-20px",
				"25-px": "25px",
				"40-px": "40px",
				"95-px": "95px",
				"145-px": "145px",
				"195-px": "195px",
				"210-px": "210px",
				"260-px": "260px",
			},
			height: {
				"95-px": "95px",
				"70-px": "70px",
				"350-px": "350px",
				"500-px": "500px",
				"600-px": "600px",
			},
			maxHeight: {
				"860-px": "860px",
			},
			maxWidth: {
				"100-px": "100px",
				"120-px": "120px",
				"150-px": "150px",
				"180-px": "180px",
				"200-px": "200px",
				"210-px": "210px",
				"580-px": "580px",
			},
			minWidth: {
				"140-px": "140px",
				48: "12rem",
			},
			backgroundSize: {
				full: "100%",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
		},
	},
	variants: [
		"responsive",
		"group-hover",
		"focus-within",
		"first",
		"last",
		"odd",
		"even",
		"hover",
		"focus",
		"active",
		"visited",
		"disabled",
	],
};
