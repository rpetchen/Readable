import { FETCH_POSTS, VOTE_POST, CAT_POST } from '../actions/index';


export default function(state = {}, action) {
	
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload
		case VOTE_POST:
			return {...state, [action.payload.id] : action.payload}
		case CAT_POST:
		console.log(action.payload)
			return action.payload
		default:
			return state;
	}
}