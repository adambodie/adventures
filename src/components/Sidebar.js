import React, { Component } from 'react'
import ItemList from './ItemList';

export default class Sidebar extends Component{
    constructor(props) {
      super(props);
      this.state = {
        sidebarItems: [
          {title: 'vegas'},
          {title: 'hawaii2004'},
          {title: 'wildwildwest'}],
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
