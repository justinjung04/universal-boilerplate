import React, { Component } from 'react';

export default class Header extends Component {
	render () {
		const { props } = this;

		return (
			<h1 {...props}>{props.title}</h1>
		);
	}
}
