import React from 'react';
import renderer from 'react-test-renderer';
import Application from '../components/Application.js';

import * as actions from '../store/actions/index';
import * as reducers from '../store/reducers/index';
import * as types from '../store/constants/ActionTypes';

describe('actions', () => {
	it('should create an action to increment count', () => {
		const number = 0
		const expectedAction = {
			type: types.INCREMENT,
			number
		}
		expect(actions.increment(number)).toEqual(expectedAction)
	});
	it('should create an action to decrement count', () => {
		const number = 0
		const expectedAction = {
			type: types.DECREMENT,
			number
		}
		expect(actions.decrement(number)).toEqual(expectedAction)
	});
	it('should handle INCREMENT', () => {
		expect(reducers.counter(0, {
				type: types.INCREMENT
		})).toEqual(1)
	});
	it('should handle DECREMENT', () => {
		expect(reducers.counter(1, {
				type: types.DECREMENT,
		})).toEqual(0)
	});	
})
