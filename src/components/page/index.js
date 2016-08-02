import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../header';
if(process.env.WEBPACK) require('./index.scss');

export default class Page extends Component {
	render() {
		return (
			<div className='page'>
				<Header title='Page' />
				<div>This is page 1</div>
				<img src='/assets/image.jpg' />
				<br />
				<Link to='/'>
					<button>Go to home</button>
				</Link>
			</div>
		);
	}
}
