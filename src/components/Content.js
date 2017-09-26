import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';


function formUrl(photoset_id, per_page) {
	return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=${photoset_id}&user_id=8994820%40N07&per_page=${per_page}&format=json&nojsoncallback=1`;
}



export default class Content extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
      };
    }

    componentDidMount() {
      let photoset_id = this.props.id;
      let per_page = this.props.page;
      const url = formUrl(photoset_id, per_page);
      axios.get(url)
        .then(response => {
          this.setState({
            photographs: response.data.photoset.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
      return (
        <div>
          <div className="main-content">
            <PhotoList data={this.state.photographs}/>
          </div>
        </div>
      );
    }
}
