import React, { Component } from 'react';
import axios from 'axios';
import FeaturedPicture from './FeaturedPicture';
import {
	Link
  } from 'react-router-dom';

const formUrl = (length) => `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157666519338749&user_id=8994820%40N07&extras=tags&per_page=${length}&format=json&nojsoncallback=1`;
const items = (number) => `Added ${number} new Projects: `;

export default class Home extends Component {
	constructor(props) {
    	super(props);
    		this.state = {		
				updates: []
			};
		}	
		render(){
			return (
				<div className="primary">
					<div className="secondary">
						<h1>Welcome to Adam's Adventures</h1>
						<p>Over the years, I've made numerous trips throughout the U.S. and a few in Europe.  Travelling and photography are two things I've excelled at over the years.  It's a true passion I've always held.  As such, I enjoyed showing off my photos to whoever I could show them to. I typically made slideshows of my photos with Microsoft Powerpoint, including facts and other tidbits to make it more than just a picture gallery.</p>
						<p>That was then.   Now I'm able to make more creative and dynamic projects to show my photos, and with web projects, anyone can view them.   My best examples of this increased creativity can be viewed for my trips to the <a href="http://grand-canyon.bodiewebdesign.com">Grand Canyon</a> and to the <a href="http://nadm2.bodiewebdesign.com">East Coast</a>. But I do enjoy my slideshows from the past, so I made this project to showcase all of them on the web for anyone to view.  Be sure to come back and checkout out new slideshows being added.</p>
						<p>For this project, I primarily used React for the front-end aspect of this page, using the React Router dependency for routing purposes.  I've also used the Flickr API to retrieve my photos, via the Axios depenency.  On the back end is Webpack, which bundles all the modules for production-ready capabilities.</p>
						<p><strong>Version 1.1:</strong> Recent updates for this project include better visibility of text and Slick Dots, along with the addition of Tooltip to view picture information by hovering over images.</p>
						<h3>Recent Updates</h3>
						<p>{items('Nine')}
							<Link to="/warm-springs">Warm Springs</Link>,&nbsp;  
							<Link to="/lewis-river">Lewis River</Link>,&nbsp;  
							<Link to="/mckenzie-river">McKenzie River</Link>,&nbsp;  
							<Link to="/maryhill">Maryhill</Link>,&nbsp;  
							<Link to="/eugene">Eugene</Link>,&nbsp;  
							<Link to="/mt-st-helens">Mt. St. Helens</Link>,&nbsp;  
							<Link to="/cannon-beach">Cannon Beach</Link>,&nbsp;  
							<Link to="/oneonta-gorge">Oneonta Gorge</Link> and&nbsp; 
							<Link to="/olympia">Olympia</Link> - October 21, 2018
						</p>
						<p>{items('Three')}
							<Link to="/coachella">Coachella Valley</Link>,&nbsp;  
							<Link to="/tulip">Wooden Show Tulip Farm</Link> and&nbsp; 
							<Link to="/detroit-lake">Detroit Lake</Link> - August 28, 2018
						</p>						
						<p>{items('Eight')}
							<Link to="/klickitat">Klickitat River</Link>,&nbsp;
							<Link to="/mt-angel">Mt. Angel</Link>,&nbsp;
							<Link to="/willamette-valley">Willamette Valley</Link>,&nbsp;
							<Link to="/mcminnville">McMinnville</Link>,&nbsp;
							<Link to="/oregon-college">Oregon Colleges</Link>,&nbsp;
							<Link to="/oktoberfest">Oktoberfest</Link>,&nbsp;
							<Link to="/hollywood-video">Hollywood Video</Link> and&nbsp;
							<Link to="/seaside">Seaside</Link> - July 19, 2018
						</p>					
						<p>{items('Four')}
							<Link to="/panther-creek">Panther Creek</Link>,&nbsp;
							<Link to="/hood-river">Hood River</Link>,&nbsp;
							<Link to="/the-dalles">The Dalles</Link> and&nbsp;
							<Link to="/clarno">John Day Fossil Beds Clarno Unit</Link> - July 2, 2018
						</p>
						<p>Launched version 1.1 - April 8, 2018</p>
						<p>{items('Four')}
							<Link to="/beacon-rock">Beacon Rock</Link>,&nbsp;
							<Link to="/mount-hood">Mount Hood</Link>,&nbsp;
							<Link to="/smith-rock">Smith Rock</Link> and&nbsp;
							<Link to="/central-oregon">Central Oregon</Link> - April 7, 2018
						</p>
						<p>{items('Four')}
							<Link to="/salem">Salem</Link>,&nbsp;
							<Link to="/rowena-crest">Rowena Crest</Link>,&nbsp;
							<Link to="/cape-kiwanda">Cape Kiwanda</Link> and&nbsp;
							<Link to="/beacon-rock">Multnomah Falls</Link> - March 26, 2018
						</p>
						<p>{items('Two')}
							<Link to="/mccord-creek">McCord Creek</Link> and&nbsp;
							<Link to="/mt-defiance">Mt. Defiance</Link> - February 25, 2018
						</p>
						<p>{items('Five')}
							<Link to="/newport">Newport</Link>,&nbsp;
							<Link to="/eagle-creek">Eagle Creek</Link>,&nbsp;
							<Link to="/bonneville">Bonneville</Link>,&nbsp;
							<Link to="/gorge">Gorge</Link> and&nbsp;
							<Link to="/beacon-rock">Florence</Link> - February 12, 2018
						</p>
						<p>{items('Two')}
							<Link to="/san-francisco">San Francisco</Link> and&nbsp;
							<Link to="/hawaii-2008">Hawaii 2008</Link> - January 21, 2018
						</p>
						<p>{items('Two')}
							<Link to="/denver">Denver</Link> and&nbsp;
							<Link to="/seattle-2008">Seattle 2008</Link> - January 13, 2018
						</p>
						<p>{items('Four')}
							<Link to="/winter-2008">Winter</Link>,&nbsp;
							<Link to="/spring-2008">Spring</Link>,&nbsp; 
							<Link to="/summer-2008">Summer</Link> and&nbsp;
							<Link to="/fall-2008">Fall</Link> 2008 series - December 31, 2017
						</p>
						<p>{items('Two')}
							<Link to="/boston">Boston</Link> and&nbsp;
							<Link to="/italy">Italy</Link> - December 16, 2017
						</p>
						<p>{items('Two')}
							<Link to="/mississippi">Mississippi River</Link> and&nbsp;
							<Link to="/sioux-falls">Sioux Falls</Link> - December 6, 2017
						</p>
						<p>{items('Two')}
							<Link to="/kansas-city">Kansas City</Link> and&nbsp;
							<Link to="/chicago">Chicago</Link> - November 27, 2017
						</p>
						<p>Launched version 1.0 - November 23, 2017</p>
				</div>
				<div className="secondary">
					<FeaturedPicture />
				</div>
			</div>
			)
		}
	}
