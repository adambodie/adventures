import React, { Component } from 'react';
import axios from 'axios';
import Picture from './Picture';

export default class FeaturedPicture extends Component {
	constructor(props) {
    super(props);
    this.state = {		
		length: 0
		};
	}
	componentDidMount() {
		let album = `https://api.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157666519338749&user_id=8994820%40N07&format=json&nojsoncallback=1`;
		axios.get(album)
		.then(response => {
			this.setState({
				length: response.data.photoset.count_photos
			});
		})
		.catch(error => {
			console.log('Error fetching and parsing Count data', error);
		});
	}
	render(){
		let length = this.state.length;
		return(
			<Picture length={length}/>
		)
	}
}


