import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{ routes }
		</Router>
	</Provider>,
	document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./routes', () => {
		const newRoutes = require('./routes').default;
		ReactDOM.render(
			<Provider store={store}>
				<Router history={browserHistory}>
					{ newRoutes }
				</Router>
			</Provider>,
			document.getElementById('app')
		);
	});
}

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./reducers', () => {
		store.replaceReducer(require('./reducers').default);
	});
}
