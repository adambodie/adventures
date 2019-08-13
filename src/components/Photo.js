import React from 'react';

const border = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';

const Photo = ({id, category, title, color, index, length}) => (
	<div>
		<img src={`https://adventures.bodiewebdesign.com/photos/images/${category}/${id}_o.jpg`} alt={title}/>
		<h3 style={{color: color, textShadow: border }}>{title}</h3>
		<h6 style={{color: color, textShadow: border }}>{index} of {length}</h6>
	</div>
);

export default Photo;
