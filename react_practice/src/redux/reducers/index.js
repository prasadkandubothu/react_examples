import { combineReducers } from 'redux';
import UsersReducer from './reducer-users';
import PostsReducer from './reducer-posts';

export const allReducers = combineReducers({
    users : UsersReducer,
    posts : PostsReducer
});
