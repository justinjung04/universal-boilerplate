import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home';
import Page from './components/page';

export default (
	<Route path='/'>
		<IndexRoute component={Home} />
		<Route path='page' component={Page} />
	</Route>
);
