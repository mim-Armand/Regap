module.exports = {
	target: 'web',
	entry: [
	'./www/js/index.js'
	],
	output: {
		path: './www/jsc/',
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devserver:{
		historyApiFallback: true,
		contentBase: './'
	}
}