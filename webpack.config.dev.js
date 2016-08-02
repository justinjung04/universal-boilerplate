const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				BUILD: true
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src')
		    }
		]
	}
};
