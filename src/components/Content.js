import React, { Component } from 'react';
import PhotoList from './PhotoList';

export default class Content extends Component {
	render() {
		const { backgroundImage, color, title, pictures, category, page, date } = this.props;
		const carouselStyle = {
			backgroundImage: `url('https://adventures.bodiewebdesign.com/photos/backgrounds/${backgroundImage}.jpg')`,
			backgroundSize: 'cover'
		}
		const colorStyle = { color: color }
		return (
			<div style={carouselStyle} className='carousel-background'>
				<h1 className="title" style={colorStyle}>{title}</h1>
				<PhotoList pictures={pictures} category={category} page={page} color={color} date={date}/>            
			</div>
		);
	}
}
