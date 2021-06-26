module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				black: {
					100: '#cdd0d6',
					200: '#9ba2ae',
					300: '#687385',
					400: '#36455d',
					500: '#041634',
					600: '#03122a',
					700: '#020d1f',
					800: '#020915',
					900: '#01040a',
				},
			},
		},
		variants: {
			extend: {},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
};
