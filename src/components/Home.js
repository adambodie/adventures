import React, { Component } from 'react';
import Banner from './Banner';
import Update from './Update';

export default class Home extends Component {
		render(){
			const { items } = this.props;
			return (
				<React.Fragment>
				<Banner items={items} />
				<div className="primary">
					<div className="secondary">
						<h1>Welcome to Adam's Adventures</h1>
						<p>Over the years, I've made numerous trips throughout the U.S. and a few in Europe.  Travelling and photography are two things I've excelled at over the years.  It's a true passion I've always held.  As such, I enjoyed showing off my photos to whoever I could show them to. I typically made slideshows of my photos with Microsoft Powerpoint, including facts and other tidbits to make it more than just a picture gallery.</p>
						<p>That was then.   Now I'm able to make more creative and dynamic projects to show my photos, and with web projects, anyone can view them.   My best examples of this increased creativity can be viewed for my trips to the <a href="http://grand-canyon.bodiewebdesign.com">Grand Canyon</a> and to the <a href="http://nadm2.bodiewebdesign.com">East Coast</a>. But I do enjoy my slideshows from the past, so I made this project to showcase all of them on the web for anyone to view.  Be sure to come back and checkout out new slideshows being added.</p>
						<p>For this project, I primarily used React for the front-end aspect of this page, using the React Router dependency for routing purposes.  I've also used the Flickr API to retrieve my photos, via the Axios depenency.  On the back end is Webpack, which bundles all the modules for production-ready capabilities.</p>
						<p><strong>Version 1.1:</strong> Recent updates for this project include better visibility of text and Slick Dots, along with the addition of Tooltip to view picture information by hovering over images.</p>
					</div>
					<Update />
				</div>
			</React.Fragment>
			)
		}
	}
