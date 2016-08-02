import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Home from './components/home';
import Page from './components/page';

const store = createStore(reducers);

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