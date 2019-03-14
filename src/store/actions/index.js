import { INCREMENT, DECREMENT } from '../constants/ActionTypes';

export const increment = number => ({
  type: INCREMENT,
  number
});

export const decrement = number => ({
  type: DECREMENT,
  number
});

