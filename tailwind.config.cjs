const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				chakra: ["Chakra Petch", ...defaultTheme.fontFamily.serif],
				kodcha: ["Kodchasan", ...defaultTheme.fontFamily.serif],
			},
			backgroundImage: {
				'noise': "url('/src/assets/noise.svg')",
			},
			animation: {
				'spin-slow': 'spin 5s linear infinite',
				'breathing': 'breathe 5s linear infinite'
			},
			keyframes: {
				breathe: {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.15) rotate(180deg)' },
					'100%': { transform: 'scale(1) rotate(360deg)' }
				},
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
