import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, FAILED, LOADED } from '../constants/ActionTypes';

export function counter(state = 0, action) {
	switch (action.type) {
		case INCREMENT:
			if(state === 67) {
				return 0
			} else {
				return state + 1
			}
		case DECREMENT:
			if(state === 0) {
				return 67
			} else {
				return state - 1
			}
		default:
		return state
	}
}

export const year = (state = new Date().getFullYear(), action) => state

export function isFailed(state = false, action) {
	switch (action.type) {
		case FAILED:
			state = true
			return state
		default:
			return state
	}
}

export function isLoaded(state = false, action) {
	switch (action.type) {
		case LOADED:
			state = true
			return state
		default:
			return state
	}
}

const combineReducer = combineReducers({counter, year, isFailed, isLoaded});
export default combineReducer;
