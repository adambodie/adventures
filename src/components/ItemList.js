import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import Item from './Item';

export default class ItemList extends Component{
    constructor(props) {
      super(props);
      this.onHandleClick = this.onHandleClick.bind(this);
    }
    onHandleClick() {
      console.log("testing");
    }
    render(){
    let adventures = this.props.data;
    let itemList = adventures.map((x, index) =>
      <Item title={x.title} key={x.index} index={index + 1} handleClick={x.onHandleClick}/>
    )
    let scrollbarStyles = {borderRadius: 5};
    return(
          <ScrollArea
            className="area"
            contentClassName="content"
            verticalScrollbarStyle={scrollbarStyles}
            verticalContainerStyle={scrollbarStyles}
            horizontalScrollbarStyle={scrollbarStyles}
            horizontalContainerStyle={scrollbarStyles}
            smoothScrolling= {true}
            minScrollSize={40}
            >
        {itemList}
        </ScrollArea>
    );
  }
}
