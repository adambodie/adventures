import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Loading from './Loading';

export default class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
        per_page: this.props.page,
        title: this.props.title,
        background: this.props.background,
        color: this.props.color,
        date: this.props.date,
        isLoaded: false,
        isFailed: false,
      };
    }

    componentDidMount() {
      let per_page = this.props.page;
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
		const isLoaded = this.state.isLoaded;
		const carouselStyle = {
			backgroundImage: `url('https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/backgrounds/${this.state.background}.jpg')`,
      backgroundSize: 'cover'
		}
		const colorStyle = {
			color: this.state.color
		}
      return (
		<div>
		    { isLoaded ? (
				<div style={carouselStyle} className='carousel-background'>
					<h1 className="title" style={colorStyle}>{this.props.title}</h1>
					<PhotoList data={this.state.photographs} category={this.props.category} page={this.state.per_page} color={this.state.color} date={this.state.date}/>            
				</div> ) : (
					<Loading isFailed={this.state.isFailed}/>
			)}
        </div>
      );
    }
}
