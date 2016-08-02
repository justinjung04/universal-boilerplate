const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				BUILD: true,
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src', 'assets'),
                to: path.resolve(__dirname, 'dist', 'assets')
            }
        ])
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
