import React from 'react';
import FontAwesome from 'react-fontawesome';

const BannerButtons = ({onIncrement, onDecrement}) => {
	return (
		<div className='buttons'>
			<button onClick={onDecrement}><FontAwesome className='angle-left' name='angle-left' /></button>
			<button onClick={onIncrement}><FontAwesome className='angle-right' name='angle-right' /></button>
		</div>
	)
}

export default BannerButtons;
