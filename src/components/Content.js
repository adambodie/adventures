import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Loading from './Loading';

export default class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
        isLoaded: false,
        isFailed: false,
      };
    }

    componentDidMount() {
      axios.get(`https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/data/${this.props.category}.json`)
        .then(response => {
          this.setState({
            photographs: response.data,
            isLoaded: true
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing Photographs data', error);
          this.setState({
				isFailed: true
			});
        });
    }

    render() {
		const { color, title, category, background, page, date } = this.props;
		const { photographs, isLoaded, isFailed } = this.state;
		const carouselStyle = {
			backgroundImage: `url('https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/backgrounds/${background}.jpg')`,
			backgroundSize: 'cover'
		}
		const colorStyle = {
			color: color
		}
      return (
		<div>
		    { isLoaded ? (
				<div style={carouselStyle} className='carousel-background'>
					<h1 className="title" style={colorStyle}>{title}</h1>
					<PhotoList data={photographs} category={category} page={page} color={color} date={date}/>            
				</div> ) : (
					<Loading isFailed={isFailed}/>
			)}
        </div>
      );
    }
}
