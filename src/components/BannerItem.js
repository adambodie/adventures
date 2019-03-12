import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({backgroundImage, index, count, oStyle, hStyle}) => (
	<div>
		<Link to={`/${backgroundImage}`}>
			<img style={oStyle} src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/links/adventure${index}.jpg`} alt={backgroundImage}/>
		</Link>
		<p style={hStyle}>{ count + 1 } of 68</p>
	</div>
);

export default BannerItem;
