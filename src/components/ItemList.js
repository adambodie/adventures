import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import {
  Link
} from 'react-router-dom'

export default class ItemList extends Component{
    constructor(props) {
      super(props);
    }
    render(){
		let adventures = this.props.data;
		let itemList = adventures.map((x, index) =>
        <Link to={`/${x.backgroundImage}`}>
                <img src={`./src/images/adventure${index + 1}.jpg`} alt={x.backgroundImage} key={x.index}/>
        </Link>
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






