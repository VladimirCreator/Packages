/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.tsx'
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
