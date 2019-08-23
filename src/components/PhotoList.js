import React, { Component } from 'react';
import { Link } from "gatsby"
import Slider from 'react-slick';
import '../styles/carousel.scss'
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		const { pictures, page, color, backgroundColor, category, tags } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
		return(
			<React.Fragment>
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
			<div className="tags">
			<hr/>
			<p style={{color: color}}><strong>Tags:</strong> {tags.map((x, index) => {
				const replace = x.toLowerCase().replace(/ /g, "-").replace(/\./g, "")
				const space = (index === tags.length - 1) ? '' : ', ';
				return (
				<React.Fragment>
					<Link to={`/tags/${replace}`} key={index} style={{color: color}}>{x}</Link>
					{space}
				</React.Fragment>
				)
			}
			)}</p>
			</div>
			</React.Fragment>
		);
	}
}
