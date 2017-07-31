import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
if(process.env.WEBPACK) require('./index.scss');

export default ({ dispatch, todos }) => (
	<div className='home'>
		<Header title='Home' />
		<div>This is home</div>
		<br/>
		<Link to='/page'>
			<button>Go to page</button>
		</Link>
	</div>
);
