/** @type {import('tailwindcss').Config} */
export default {
	purge: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	media: false, // or 'media' or 'class'
	theme: {
		colors: {
			darkpurple: `rgb(36,5,62)`,
			green: `rgb(68,255,161)`,
			slate: `rgb(88,77,98)`,
			mist: `rgb(253,250,255)`,
			white: `rgb(255,255,255)`,
		},
		fontFamily: {
			manrope: ["Manrope", "monospace"],
			fraunces: ["Fraunces", "Arial"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
