import React, { Component } from 'react';
import axios from 'axios';


function formUrl(length) {
	return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157666519338749&user_id=8994820%40N07&extras=tags&per_page=${length}&format=json&nojsoncallback=1`;
}

export default class Picture extends Component {
	constructor(props) {
    super(props);
    this.state = {		
		length: this.props.length,
		item: []
		};
	}
	componentDidMount(){
		const url = formUrl(this.props.length);
		axios.get(url)
			.then(response => {
				this.setState({
					item: response.data.photoset.photo[Math.floor(Math.random() * response.data.photoset.photo.length)] 
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing data', error);
			});		
	}
	render() {
		let item = this.state.item;
		let farm = item.farm;
		let server = item.server;
		let id = item.id;
		let secret = item.secret;
		let title = item.title;
		return(
		<div>
			<h2>Featured Picture</h2>
			<img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`} alt={title}/>
			<h4>{title}</h4>
		</div>
		)
	}	
}
