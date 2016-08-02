import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.getElementById('app'));

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./app', () => {
		const NewApp = require('./app').default;
		render(<NewApp />, document.getElementById('app'));
	});
}
