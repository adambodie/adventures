import React, { Component } from 'react'
import ItemList from './ItemList';


/*TODO
 * 1. Change value of Sidebar with Content based on button handle
 * 2. Create Event handlers to pass state
 * -----------------------------------*/
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
      return (
        <div>
            <ItemList data={this.state.sidebarItems} onChange={this.handleChange}/>
        </div>
      );
    }
}
