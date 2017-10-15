import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
import Item from './Item';

export default class ItemList extends Component{
    constructor(props) {
      super(props);
    }
    render(){
    let adventures = this.props.data;
    let itemList = adventures.map((x, index) =>
      <Item title={x.backgroundImage} key={x.index} index={index + 1} handleClick={this.props.onChange}/>
    )
    let scrollbarStyles = {borderRadius: 5};
    return(
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
