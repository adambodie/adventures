export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if(state === 67) {
        return 0
      } else {
      return state + 1
     }
    case 'DECREMENT':
      if(state === 0) {
		  return 67
		} else {
      return state - 1
     }
    default:
      return state
  }
}
