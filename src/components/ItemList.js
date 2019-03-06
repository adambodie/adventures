import React, { Component } from 'react';
import Counter from './Counter';
import Item from './Item';
import store from "../store";

export default class ItemList extends Component {
	render(){
		const { data } = this.props; 	
		let itemList = data.map((x, index) => {
			if (index === store.getState()) {
				return <Item count={store.getState()} backgroundImage={x.backgroundImage} index={index + 1} key={index}/>
			}
			return null;
		})
		return (
			<React.Fragment>
				{itemList}
				<Counter
					count={store.getState()}
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
			</React.Fragment>
		);
	}
}






