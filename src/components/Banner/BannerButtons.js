import React from 'react';
import BannerButton from './BannerButton';

const BannerButtons = ({onIncrement, onDecrement}) => {
	return (
		<div className='buttons'>
			<BannerButton onChange={onDecrement} className={'angle-left'} />
			<BannerButton onChange={onIncrement} className={'angle-right'} />
		</div>
	)
}

export default BannerButtons;
