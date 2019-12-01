import React, { Component } from 'react'
import '../styles/carousel.scss'

export default class Photo extends Component {
	render() {
		const { id, category, title, color, backgroundColor, index, length } = this.props;
		const border = `-1px 0 ${backgroundColor}, 0 1px ${backgroundColor}, 1px 0 ${backgroundColor}, 0 -1px ${backgroundColor}`;
		const colorStyle = {
			color: color, 
			textShadow: border
		}
		return (
			<div className='image-caption'>
				{id !== null ? (
					<img src={`/assets/images/${category}/${id}_o.jpg`} alt={title}/> 
				) : (<div style={{width: '600px', height: '300px'}}></div>)
				}
				<h3 style={colorStyle}>{title}</h3>
				<h6 style={colorStyle}>{index} of {length}</h6>
			</div>
		);
	}
}
