import React, { Component } from 'react';
import PhotoList from './PhotoList';

export default class Content extends Component {
	render() {
		const { backgroundImage, color, backgroundColor, title, pictures, category, page, date } = this.props;
		const border = `-1px 0 ${backgroundColor}, 0 1px ${backgroundColor}, 1px 0 ${backgroundColor}, 0 -1px ${backgroundColor}`;
		const carouselStyle = {
			backgroundImage: `url('https://adventures.bodiewebdesign.com/photos/backgrounds/${backgroundImage}.jpg')`,
			backgroundSize: 'cover',
			textShadow: border
		}
		const colorStyle = { color: color }
		return (
			<div style={carouselStyle} className='carousel-background'>
				<h1 className="title" style={colorStyle}>{title}</h1>
				<PhotoList pictures={pictures} category={category} page={page} color={color} backgroundColor={backgroundColor} date={date}/>            
			</div>
		);
	}
}
