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
		updates: [],
		length: this.props.length
		};
	}
	componentDidMount() {
		const url = formUrl(length);
		const json = 'https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/data/update.json';
		axios.get(url)
			.then(response => {
				this.setState({
					items: response.data.photoset.photo[Math.floor(Math.random() * response.data.photoset.photo.length)] 
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing data', error);
			});
		axios.get(json)
			.then(response => {
				this.setState({
					updates: response.data
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing data', error);
			});
		}		

		render(){
			let items = this.state.items;
			let updateItems = this.state.updates.map((x, index) =>
				<p key={index}>{x.description} - {x.date}</p>
			) 
			return (
				<div className="primary">
				<div className="secondary">
					<h1>Welcome to Adam's Adventures</h1>
					<p>Over the years, I've made numerous trips throughout the U.S. and a few in Europe.  Travelling and photography are two things I've excelled at over the years.  It's a true passion I've always held.  As such, I enjoyed showing off my photos to whoever I could show them to. I typically made slideshows of my photos with Microsoft Powerpoint, including facts and other tidbits to make it more than just a picture gallery.</p>
					<p>That was then.   Now I'm able to make more creative and dynamic projects to show my photos, and with web projects, anyone can view them.   My best examples of this increased creativity can be viewed for my trips to the <a href="http://grand-canyon.bodiewebdesign.com">Grand Canyon</a> and to the <a href="http://nadm2.bodiewebdesign.com">East Coast</a>. But I do enjoy my slideshows from the past, so I made this project to showcase all of them on the web for anyone to view.  Be sure to come back and checkout out new slideshows being added.</p>
					<p>For this project, I primarily used React for the front-end aspect of this page, using the React Router dependency for routing purposes.  I've also used the Flickr API to retrieve my photos, via the Axios depenency.  On the back end is Webpack, which bundles all the modules for production-ready capabilities.</p>
					<h3>Recent Updates</h3>
					{updateItems}
				</div>
				<div className="secondary">
					<h2>Featured Picture</h2>
					<img src={`https://farm${items.farm}.staticflickr.com/${items.server}/${items.id}_${items.secret}_z.jpg`} alt={items.title}/>
					<h4>{items.title}</h4>
				</div>
			</div>
			)
		}
}
