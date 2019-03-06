import React from 'react'
import ItemList from './ItemList';

const Sidebar =({items}) => (
	<div className="sidebarItems">
		<ItemList data={items} />
	</div>
)
export default Sidebar;
