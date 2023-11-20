/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			keyframes: {
				grow: {
					'0%': { height: '0' },
					'100%': { height: 'var(--radix-accordion-content-height)' }
				},
				shrink: {
					'0%': { height: 'var(--radix-accordion-content-height)' },
					'100%': { height: '0' }
				}
			},
			animation: {
				grow: 'grow 250ms ease-out', shrink: 'shrink 250ms ease-out'
			}
		}
	},
	plugins: [require("@tailwindcss/container-queries")]
}
