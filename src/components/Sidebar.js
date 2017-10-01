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
        sidebarItems: [
          {backgroundImage: 'vegas', photoset_id: 72157687042225613, per_page: 37},
          {backgroundImage: 'hawaii', photoset_id: 72157686468511520, per_page: 76},
          {backgroundImage: 'wildwildwest', photoset_id: 72157688485135075, per_page: 300}],
      }
    }
    render() {
      return (
        <div>
            <ItemList data={this.state.sidebarItems}/>
        </div>
      );
    }
}
