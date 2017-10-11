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
          {backgroundImage: 'vegas', title: 'High School Graduation Trip to Las Vegas', color: 'gold', photoset_id: 72157687042225613, per_page: 37},
          {backgroundImage: 'hawaii', title: 'Mahalo Fora Maui', color: 'gold', photoset_id: 72157686468511520, per_page: 76},
          {backgroundImage: 'europe', title: 'My Trip to Europe', color: 'gold', photoset_id: 72157686893038650, per_page: 138}],
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
