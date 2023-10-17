const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				chakra: ["Chakra Petch", ...defaultTheme.fontFamily.serif],
				kodcha: ["Kodchasan", ...defaultTheme.fontFamily.serif], 
			}, 
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				".no-scrollbar": {
					"ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
			};
			addUtilities(newUtilities);
		},
	],
};
