import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import Item from './Item';

export default class ItemList extends Component{
    render(){
		let adventures = this.props.data;
		let itemList = adventures.map((x, index) =>
			<Item backgroundImage={x.backgroundImage} index={index + 1} key={index}/>
		)    
		let scrollbarStyles = {borderRadius: 5};
		  return (
			  <ScrollArea
				className="area"
				contentClassName="content"
				horizontalScrollbarStyle={scrollbarStyles}
				horizontalContainerStyle={scrollbarStyles}
				smoothScrolling= {true}
				vertical={false}
				minScrollSize={40}
				>
			{itemList}
			</ScrollArea>
		  );
	}
}






