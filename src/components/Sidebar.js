import React from 'react'
import ScrollArea from 'react-scrollbar';

class Sidebar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            itemsCount : 10
        };
    }

    render() {
        var itemElements = [];

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}><img src="http://via.placeholder.com/250x150"/></div>);
        }

        let scrollbarStyles = {borderRadius: 5};
		let w = window.innerWidth;
		let whichScroll = w > 768 ? true : false; 
		console.log(whichScroll);
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
                  horizontal={false}
                  vertical={true}
                  >

                    {itemElements}

                </ScrollArea>

            </div>
        );
    }
}

export default Sidebar;
