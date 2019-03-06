import React from 'react'

const Counter = ({onIncrement, onDecrement}) => {
	return (
		<div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button>
		</div>
	)
}

export default Counter;
