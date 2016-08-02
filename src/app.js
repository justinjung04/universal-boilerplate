import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Home from './components/home';
import Page from './components/page';

const store = createStore(reducers);

if(process.env.NODE_ENV == 'development' && module.hot) {
	module.hot.accept('./reducers', () => {
		store.replaceReducer(require('./reducers').default);
	});
}

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='app'>
					<Home />
					<Page />
				</div>
			</Provider>
		);
	}
}
