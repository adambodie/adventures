import React from 'react';
import FontAwesome from 'react-fontawesome';

const BannerButtons = ({onIncrement, onDecrement}) => {
	return (
		<div className='buttons'>
			<button onClick={onDecrement}><FontAwesome className='minus' name='minus' /></button>
			<button onClick={onIncrement}><FontAwesome className='plus' name='plus' /></button>
		</div>
	)
}

export default BannerButtons;
