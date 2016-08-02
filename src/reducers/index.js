import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';

export default combineReducers({
    todos,
    routing: routerReducer
});
