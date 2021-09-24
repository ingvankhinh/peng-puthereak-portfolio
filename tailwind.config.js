const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: [ 'Sora', 'sans-serif' ]
		},
		colors: {
			transparent: 'transparent',
			'dark-blue': {
				DEFAULT: '#1E2640',
				light: '#293457',
				lightest: '#1E264099'
			},
			champagne: {
				DEFAULT: '#F3EAC0',
				light: '#F3EAC0CC',
				lightest: '#F3EAC099'
			}
		},
		extend: {}
	},
	//Specifying properties for that uses dark mode
	variants: {
		extend: {}
	},
	plugins: []
};
