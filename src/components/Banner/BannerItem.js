import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({backgroundImage, index, count, oStyle}) => (
	<React.Fragment>
		{oStyle ? (
			<img style={oStyle} src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/links/adventure${index}.jpg`} alt={backgroundImage}/>
			) : (
			<div>
				<Link to={`/${backgroundImage}`}>
					<img style={oStyle} src={`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/links/adventure${index}.jpg`} alt={backgroundImage}/>
				</Link>
				<p>{ count + 1 } of 68</p>
			</div>
		)}
	</React.Fragment>
);

export default BannerItem;
