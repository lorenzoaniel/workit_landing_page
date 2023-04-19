/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	media: false, // or 'media' or 'class'
	theme: {
		colors: {
			darkpurple: `rgb(36,5,62)`,
			green: `rgb(68,255,161)`,
			slate: `rgb(88,77,98)`,
			bulletSlate: `rgb(184, 184, 184)`,
			mist: `rgb(253,250,255)`,
			white: `rgb(255,255,255)`,
			ghostwhite: `rgb(252, 248, 255)`,
		},
		fontFamily: {
			manrope: ["Manrope", "monospace"],
			fraunces: ["Fraunces", "serif"],
		},
		extend: {
			// Add custom breakpoints if needed
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
};
