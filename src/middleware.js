import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import reducers from './reducers';
import routes from './routes';

export default (req, res) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		res.send(`
			<!doctype html>
		    <html>
		        <header>
		            <title>My Universal App</title>
		        </header>
		        <body>
		            <div id='app'>${renderToString(
		            	<Provider store={createStore(reducers)}>
							<RouterContext {...renderProps} />
		            	</Provider>
		            )}</div>
		            <script src='bundle.js'></script>
		        </body>
		    </html>
		`);
	});
};
