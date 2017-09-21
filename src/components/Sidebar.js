import React from 'react'
import ScrollArea from 'react-scrollbar';

class Sidebar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            itemsCount : 7
        };
    }
    render() {
        var itemElements = [];

        for( var i = 1; i< this.state.itemsCount + 1; i++){
            itemElements.push(<img src={`./src/images/adventure${i}.jpg`} alt={i} key={i}/>);
        }

        let scrollbarStyles = {borderRadius: 5};

        return (
            <div>
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

                    {itemElements}

                </ScrollArea>

            </div>
        );
    }

}

export default Sidebar;
