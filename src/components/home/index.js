import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import { toggleTodo } from '../../actions/todos';

class Home extends Component {
	render() {
		const { dispatch, todos } = this.props;

		return (
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
			</div>
		);
	}
}

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);
