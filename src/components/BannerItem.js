import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({backgroundImage, index}) => (
	<Link to={`/${backgroundImage}`}>
		<img src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/links/adventure${index}.jpg`} alt={backgroundImage}/>
	</Link>
);

export default BannerItem;
