import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from './Photo';
import FontAwesome from 'react-fontawesome';

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
  let length = this.props.page;
  let photos = results.map((x, index) =>
    <div key={x.id}>
    <Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} index={index + 1} length={length}/>
    </div>
  )
  
  return(
  <div>
    <Slider ref={c => this.slider = c } {...settings}>
      {photos}
    </Slider>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
		<button className='button left' onClick={this.previous}>
			<FontAwesome 
				name='arrow-circle-left'  
				style={{position: 'relative'}}
			/>
		</button>
        <button className='button right' onClick={this.next}>
			<FontAwesome 
				name='arrow-circle-right' 
				style={{position: 'relative'}}
			/>
		</button>
    </div>
    </div>
  );
}
}
