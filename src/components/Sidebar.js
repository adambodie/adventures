import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar';
//import ItemList from './ItemList';


export default class Sidebar extends Component{
    constructor(props) {
      super(props);
      this.state = {
		  sidebarItems: this.props.items
    }
    this.handleChange = this.handleChange.bind(this);
}
  handleChange(event) {
      this.props.onBackgroundImageChange(event.backgroundImage);
      console.log("Testing");
  }

    render() {
		let sidebarItems = this.props.items;
		let itemList = sidebarItems.map((x, index) =>
        <button onClick={x.handleClick}>
                <img src={`./src/images/adventure${index + 1}.jpg`} alt={x.backgroundImage} key={x.index}/>
        </button>
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
