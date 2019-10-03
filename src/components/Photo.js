import React, { Component } from 'react'
import '../styles/carousel.scss'

export default class Photo extends Component {
	render() {
		const { id, category, title, color, backgroundColor, index, length } = this.props;
		const border = `-1px 0 ${backgroundColor}, 0 1px ${backgroundColor}, 1px 0 ${backgroundColor}, 0 -1px ${backgroundColor}`;
		const style = {
			color: color, 
			textShadow: border
		}
		return (
			<div className='image-caption'>
				<img src={`https://adventures.bodiewebdesign.com/_photos/images/${category}/${id}_o.jpg`} alt={title}/>
				<h3 style={style}>{title}</h3>
				<h6 style={style}>{index} of {length}</h6>
			</div>
		);
	}
}
