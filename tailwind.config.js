/* for more details, visit: https://tailwindcss.com/docs/guides/nextjs */

module.exports = {
	mode: "jit", // add this line to add Just in Time Compiler
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // fill the array like this
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/line-clamp") // for truncation
	],
};

/* After this add tailwind in ./styles/globals.css */