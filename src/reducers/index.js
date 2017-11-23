import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import CategoryReducer from './categories.js'
import CommentReducer from './comments.js'

const rootReducer = combineReducers({
  posts: PostsReducer,
  categories: CategoryReducer,
  comments: CommentReducer
});

export default rootReducer;

