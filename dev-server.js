const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false
	}
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.send(`
		<!doctype html>
		<html>
			<head>
				<title>My Universal App</title>
			</head>
			<body>
				<div id='app'></div>
				<script src='bundle.js'></script>
			</body>
		</html>
	`);
});

app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');	
	}
});
