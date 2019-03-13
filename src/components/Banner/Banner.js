import React from 'react'
import BannerList from './BannerList';

const Banner =({items}) => (
	<div className="sidebarItems">
		<BannerList data={items} />
	</div>
)
export default Banner;
