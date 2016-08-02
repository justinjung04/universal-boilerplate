const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export { toggleTodo };
