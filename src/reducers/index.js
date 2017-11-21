import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import CategoryReducer from './categories.js'

const rootReducer = combineReducers({
  posts: PostsReducer,
  categories: CategoryReducer
});

export default rootReducer;

