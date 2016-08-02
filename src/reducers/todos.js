const initialState = [
    { id: 1, text: 'Todo 1', checked: false },
    { id: 2, text: 'Todo 2', checked: false },
    { id: 3, text: 'Todo 3', checked: false }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.checked = !todo.checked;
                }
                return todo;
            });
        default:
            return state;
    }
};
