import React, { Component } from 'react'
import ItemList from './ItemList';

export default class Sidebar extends Component{
    constructor(props) {
      super(props);
	}

    render() {
		const {items} = this.props;
		return (
			<div>
				<ItemList data={items} />
			</div>
			)
		}
}
