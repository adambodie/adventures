import React, { Component } from 'react'
import Slider from 'react-slick'
import FontAwesome from 'react-fontawesome'
import '../styles/carousel.scss'
import Photo from './Photo'

export default class PhotoList extends Component {
	constructor() {
		super();
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
  	}
	render() {
		const { pictures, page, color, backgroundColor, category } = this.props;
		const arrowStyle = {
			color: color, 
			textShadow: `2px 2px 4px ${backgroundColor}`
		}
		const PrevArrow = () => <FontAwesome className='icon icon-arrow prev' style={arrowStyle} name='arrow-circle-left' onClick={()=> this.previous()}/>
		const NextArrow = () => <FontAwesome className='icon icon-arrow next' style={arrowStyle} name='arrow-circle-right' onClick={()=> this.next()}/>
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />
		};
		return(
			<Slider ref={c => this.slider = c } {...settings}>
				{pictures.map((x, index) =>
					<div key={index}>
						<Photo 
							id={x.id} 
							title={x.title} 
							category={category} 
							index={index + 1} 
							length={page} 
							color={color} 
							backgroundColor={backgroundColor} 
						/>
					</div>
				)}
			</Slider>
		);
	}
}
