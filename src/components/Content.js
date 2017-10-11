import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Loading from './Loading';

function formUrl(photoset_id, per_page) {
	return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=${photoset_id}&user_id=8994820%40N07&per_page=${per_page}&format=json&nojsoncallback=1`;
}


export default class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
        per_page: this.props.page,
        title: this.props.title,
        background: this.props.background,
        color: this.props.color,
        isLoading: false,
      };
    }

    componentDidMount() {
      let photoset_id = this.props.id;
      let per_page = this.props.page;
      const url = formUrl(photoset_id, per_page);
      axios.get(url)
        .then(response => {
          this.setState({
            photographs: response.data.photoset.photo,
            isLoading: true
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
		const isLoading = this.state.isLoading;
		const carouselStyle = {
			backgroundImage: `url('./src/images/${this.state.background}.jpg')`,
			backgroundSize: 'cover',
			
		}
		const colorStyle = {
			color: this.state.color
		}
      return (
      <div>
		{ isLoading ? (
          <div style={carouselStyle}>
				<h1 className="title" style={colorStyle}>{this.props.title}</h1>
            <PhotoList data={this.state.photographs} page={this.state.per_page}/>
          </div> ) : (
				<Loading />
          )}
        </div>
      );
    }
}
