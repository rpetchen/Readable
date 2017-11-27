import { FETCH_COMMENTS, FETCH_COMMENT, EDIT_COMMENT } from '../actions/index';


export default function(state = [], action) {
	
	switch (action.type) {
		case FETCH_COMMENTS:
			
			return action.payload
		case FETCH_COMMENT:
		
			return {...state, [action.payload.id] : action.payload}
		case EDIT_COMMENT:
			return {...state, [action.payload.id] : action.payload}

		default:
			return state;
	}
}