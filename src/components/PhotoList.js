import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		const { data, page, color, category } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
		return(
				<Slider ref={c => this.slider = c } {...settings}>
					{data.map((x, index) =>
						<div key={x.id}>
							<Photo id={x.id} title={x.title} category={category} index={index + 1} length={page} color={color}/>
						</div>
					)}
				</Slider>
		);
	}
}
