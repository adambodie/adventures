import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export default class PhotoList extends Component {
	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
  let length = this.props.page;
  let color = this.props.color;
  let photos = results.map((x, index) =>
    <div key={x.id}>
    <Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} tags={x.tags} datetaken={x.datetaken} index={index + 1} length={length} color={color}/>
    </div>
  )
  
  return(
  <div>
    <Slider ref={c => this.slider = c } {...settings}>
      {photos}
    </Slider>	
    </div>
  );
}
}
