import React from 'react';
import ScrollArea from 'react-scrollbar';
import Item from './Item';

const ItemList = props => {
  let adventures = props.data;
  console.log(adventures);

  let itemList = adventures.map((x, index) =>
    <Item title={x.title} key={x.index} index={index + 1}/>
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

export default ItemList;
