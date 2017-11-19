import React, { Component } from 'react';
import axios from 'axios';

function formUrl(length) {
	return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157666519338749&user_id=8994820%40N07&extras=tags&per_page=${length}&format=json&nojsoncallback=1`;
}

export default class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {		
		items: [],
		length: this.props.length
		};
	}
	componentDidMount() {
		const url = formUrl(length);
		axios.get(url)
			.then(response => {
				this.setState({
					items: response.data.photoset.photo[Math.floor(Math.random() * response.data.photoset.photo.length)] 
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing data', error);
			});
		}
		render(){
			let items = this.state.items;
			let farm = items.farm;
			let server = items.server;
			let id = items.id;
			let secret = items.secret;
			let title = items.title;
			return (
				<div className="primary">
				<div className="secondary">
					<h1>Welcome to Adam's Adventures</h1>
					<p>Over the years, I've made numerous trips throughout the U.S. and a few in Europe.  Travelling and photography are two things I've excelled at throughout the years.  It's a true passion I've always held.  Along with my many photos, comes a theathric presentation of said photos.  There's more than showing photos than just showing photos.  That's why I made slideshows of my best trips and photos.  But in this current age, my creativity has evolved beyond great heights.  That doesn't mean I ignore the limitations of the past.  With that said, I have recreated my presentations using modern web-based technologies, all viewable on the web for the first time.  Enjoy!</p>
					<h3>Recent Updates</h3>
					<p>Launch</p>
				</div>
				<div className="secondary">
				<h2>Featured Picture</h2>
				<img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`} alt={title}/>
        <h4>{title}</h4>
				</div>
				</div>
			)
		}
}
