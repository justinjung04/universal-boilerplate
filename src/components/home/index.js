import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTodo } from '../../actions/todos';
import Header from '../header';
if(process.env.WEBPACK) require('./index.scss');

const Home = ({ dispatch, todos }) => (
	<div className='home'>
		<Header title='Home' />
		<div>This is home</div>
		<br />
		{todos.map((todo) => (
			<div key={ todo.id }>
				<span style={ (todo.checked) ? { textDecoration: 'line-through' } : {} }>{ todo.text } </span>
				<button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
			</div>
		))}
		<br/>
		<Link to='/page'>
			<button>Go to page</button>
		</Link>
	</div>
);

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);
