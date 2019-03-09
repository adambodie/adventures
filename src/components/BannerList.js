import React, { Component } from 'react';
import BannerButtons from './BannerButtons';
import BannerItem from './BannerItem';
import store from '../store';

export default class BannerList extends Component {
	render(){
		const { data } = this.props;
		return (
			<React.Fragment>
				{data.map((x, index) => {
					if (index === store.getState().counter) {
						return <BannerItem count={store.getState().counter} backgroundImage={x.backgroundImage} index={index + 1} key={index}/>
					}
				return null;
		})}
				<BannerButtons
					count={store.getState().counter}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
			</React.Fragment>
		);
	}
}






