import React, { Component } from 'react';
import Slider from 'react-slick';
import '../styles/carousel.scss'
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		const { pictures, page, color, backgroundColor, category } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
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
