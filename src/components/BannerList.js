import React, { Component } from 'react';
import BannerButtons from './BannerButtons';
import BannerItem from './BannerItem';
import store from '../store';

export default class BannerList extends Component {
	render(){
		const opacStyle = { opacity: 0.1};
		const hiddenStyle = { opacity: 0 };
		const { data } = this.props;
		let counter = store.getState().counter;
		return (
			<React.Fragment>
				<div className="banners">
				{data.map((x, index) => {
					if (index === counter) {
						return (
							<BannerItem 
								count={counter} 
								backgroundImage={x.backgroundImage} 
								index={index + 1} 
								key={index}
								/>
							)
					}
					if (index - 1 === counter || index + 1 === counter) {
						return (
							<BannerItem 
								opacStyle={opacStyle} 
								hiddenStyle={hiddenStyle}
								count={counter} 
								backgroundImage={x.backgroundImage} 
								index={index + 1} 
								key={index}
								/>
							)
						}
					return null;
					}
				)}
			</div>
				<BannerButtons
					count={counter}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
			</React.Fragment>
		);
	}
}






