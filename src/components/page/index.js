import React, { Component } from 'react';

import Header from '../header';

export default class Page extends Component {
	render() {
		return (
			<div className='page'>
				<Header title='Page' />
				<div>This is page 1</div>
				<img src='/assets/image.jpg' />
				<br />
			</div>
		);
	}
}
