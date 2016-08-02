import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

export default (req, res) => {
	res.send(`
		<!doctype html>
	    <html>
	        <header>
	            <title>My Universal App</title>
	        </header>
	        <body>
	            <div id='app'>${renderToString(<App />)}</div>
	            <script src='bundle.js'></script>
	        </body>
	    </html>
	`);
};
