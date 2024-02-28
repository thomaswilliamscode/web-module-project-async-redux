import { combineReducers } from 'redux';
import data from '../components/data'



const initialState = {
	error: false,
	data: data
}
const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'get_new_img':
			return {
				...state,
				error: false,
				data: action.payload
			}
		case 'get_new_img_error':
			return {
				...state,
				error: true
			}
		default:
			return state
	}
};

export default reducer