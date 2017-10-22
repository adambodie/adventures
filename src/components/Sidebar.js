import React, { Component } from 'react'
import ItemList from './ItemList';


export default class Sidebar extends Component{
    constructor(props) {
      super(props);
      this.state = {
		  sidebarItems: this.props.items
		}
	}

    render() {
		let sidebarItems = this.props.items;
		return (
			<div>
				<ItemList data={this.state.sidebarItems} />
			</div>
			)
		}
}
