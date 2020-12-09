module.exports = {
	purge: ['./src/**/*.js', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: { backgroundColor: { 'star-wars-purple': '#20164d' } },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
