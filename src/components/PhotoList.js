import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

export default class PhotoList extends Component {
	constructor(props) {
		super(props)
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext()
	}
	previous() {
		this.slider.slickPrev()
	}

	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
  let length = results.length;
  let photos = results.map((x, index) =>
    <div key={x.id}>
    <Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} index={index + 1}/>
    </div>
  )
  
  return(
  <div>
    <Slider ref={c => this.slider = c } {...settings}>
      {photos}
    </Slider>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
		<button className='button' onClick={this.previous}>&lt;</button>
        <button className='button' onClick={this.next}>&gt;</button>
    </div>
    </div>
  );
}
}
