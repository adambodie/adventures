// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Content from './Content';
import Sidebar from './Sidebar';
import Home from './Home';
import ComingSoon from './ComingSoon';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import {Collapse} from 'react-collapse';

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {		
		items: [],
		isOpened: true,
		length: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
	handleClick() {
		this.setState(prevState => ({
			isOpened: !prevState.isOpened
		}));
	}

  render(){
	const year = new Date().getFullYear();
	let item = [{
		"backgroundImage": "vegas",
		"title": "High School Graduation Trip to Las Vegas",
		"id": "72157687042225613",
		"page": "38",
		"color": "lightblue",
		"completed": true
	}, {
		"backgroundImage": "hawaii",
		"title": "Mahalo Fora Maui",
		"id": "72157686468511520",
		"page": "77",
		"color": "#FF9933",
		"completed": true
	}, {
		"backgroundImage": "europe",
		"title": "My Trip to Europe",
		"id": "72157686893038650",
		"page": "139",
		"color": "gold",
		"completed": true
	}, {
		"backgroundImage": "seattle",
		"title": "Birthday Trip to Seattle",
		"id": "72157687246355471",
		"page": "33",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "cross-country",
		"title": "Cross Country Trip to Minnesota",
		"id": "72157688200510913",
		"page": "67",
		"color": "white",
		"completed": true
	}, {
		"backgroundImage": "minnesota",
		"title": "Getting Adjusted to the Midwest with the Twin Cities and surrounding areas",
		"id": "72157688415662014",
		"page": "83",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "green-bay",
		"title": "My Cheesy Trip to Green Bay",
		"id": "72157688332691124",
		"page": "46",
		"color": "yellow",
		"completed": true
	}, {
		"backgroundImage": "kansas-city",
		"title": "Show Me The Sights, A Pursuit of Enjoiment",
		"id": "72157688936201011",
		"page": "120",
		"color": "white",
		"completed": true
	}, {
		"backgroundImage": "chicago",
		"title": "My Great Adventure around Lake Michigan",
		"id": "72157691022168926",
		"page": "130",
		"color": "yellow",
		"completed": true
	}, {
		"backgroundImage": "mississippi",
		"title": "Rafting Down the Mississippi RIver",
		"id": "72157663252243728",
		"page": "188",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "sioux-falls",
		"title": "Me and Sue sue Sioux Falls as Sue Falls while listening to Su-Sussudio",
		"id": "72157689257045661",
		"page": "57",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "boston",
		"title": "A History of Boston with all the Tea you want (Even though we have to tax it)",
		"id": "72157661549484707",
		"page": "86",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "italy",
		"title": "Dodici giorni di divertitio: Un Viaggio Speciale in Italia",
		"id": "72157663595965918",
		"page": "197",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "winter-2008",
		"title": "'Winter' in the Pacific Northwest(Not that I'd call it a real Winter)",
		"id": "72157663952079258",
		"page": "86",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "spring-2008",
		"title": "Spring in the Pacific Northwest (Almost the same as 'Winter'!)",
		"id": "72157691419938085",
		"page": "96",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "denver",
		"title": "One Mile Higher Than You in Denver",
		"id": "72157691119632474",
		"page": "127",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "summer-2008",
		"title": "Summer in the Pacific Northwest: Warm like anywhere else but without the rain",
		"id": "72157667948673899",
		"page": "111",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "seattle-2008",
		"title": "Seattle 2008: On The Road Again (Without Willie Nelson)",
		"id": "72157691119727204",
		"page": "96",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "san-francisco",
		"title": "11 Bags of Luggage & 16 Pairs of Shoes: A Trip to San Francisco",
		"id": "72157668192188609",
		"page": "108",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "fall-2008",
		"title": "Fall in the Pacific Northwest (or is it Winter or Spring again, oh wait, the Pacific Northwest only has two seasons)",
		"id": "72157664162253348",
		"page": "112",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "hawaii-2008",
		"title": "Māui Hawai'i 2008: Coasts, Mountains & Mom's Mai Tai's",
		"id": "72157691168971614",
		"page": "160",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "newport",
		"title": "Newport, Ain't a Damn Thang Changed",
		"id": "72157665152227038",
		"page": "41",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "eagle-creek",
		"title": "Surviving the Trenches of Eagle Creek",
		"id": "72157693309197595",
		"page": "16",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "bonneville",
		"title": "Adam went to a Dam: Bonneville Dam",
		"id": "72157669460947509",
		"page": "24",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "gorge",
		"title": "Perfecting My Art and Toning My Skills at the Columbia River Gorge",
		"id": "72157669461141049",
		"page": "18",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "florence",
		"title": "Celebrating Adam Day in Florence, 5,800 miles from Florence",
		"id": "72157692535924354",
		"page": "45",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "mccord-creek",
		"title": "Green With Envy at McCord Creek (On St. Patrick’s Day Nonetheless)",
		"id": "72157691924241871",
		"page": "14",
		"color": "white",
		"completed": true
	}, {
		"backgroundImage": "mt-defiance",
		"title": "Learning New Camera Tricks at Mt. Defiance and Having Way Too Much Fun Taking Advantage",
		"id": "72157691924278431",
		"page": "25",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "salem",
		"title": "Blue & Pink in Salem",
		"id": "72157664178325827",
		"page": "25",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "rowena-crest",
		"title": "Scrambled Eggs Beyond Mount Hood at the Columbia River Gorge",
		"id": "72157692907184311",
		"page": "33",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "cape-kiwanda",
		"title": "Cape Kiwanda; Cape, Cape Kiwanda, Cape Kiwanda yeah, get her out of my heart",
		"id": "72157694677989915",
		"page": "34",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "multnomah-falls",
		"title": "Discovering the Sun at Multnomah Falls",
		"id": "72157692907161901",
		"page": "28",
		"color": "black",
		"completed": true
	},{
		"backgroundImage": "beacon-rock",
		"title": "Peakin' Up Beacon Rock",
		"id": "72157689363170010",
		"page": "23",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "mount-hood",
		"title": "Pre-Birthday Trip to Mount Hood",
		"id": "72157694360806394",
		"page": "28",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "smith-rock",
		"title": "Exploring Smith Rock myself without the 'Haleakala Moment'",
		"id": "72157667448729618",
		"page": "57",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "central-oregon",
		"title": "Living Life to the Fullest in Central Oregon",
		"id": "72157692250024342",
		"page": "153",
		"color": "black",
		"completed": true
	}, {
		"backgroundImage": "panther-creek",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "hood-river",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "the-dalles",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "clarno",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "klickitat",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "mt-angel",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "willamette-valley",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "mcminnville",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "oregon-college",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "oktoberfest",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "hollywood-video",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "seaside",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "coachella",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "tulip",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "detroit-lake",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "warm-springs",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "lewis-river",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "mckenzie-river",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "maryhill",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "eugene",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "mt-st-helens",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "cannon-beach",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "oneonta-gorge",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "olympia",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "alabama",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "three-capes",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "central-oregon-2008",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "two-mountains",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "wine-country",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "hood-river-2011",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "more-hood-river",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}, {
		"backgroundImage": "portland",
		"title": null,
		"id": null,
		"page": null,
		"color": null,
		"completed": false
	}
	
	
	];
	
	let isOpened = this.state.isOpened;
	let routes = item.map((r) => {
				if (r.completed) {
					return <Route exact path={"/" + r.backgroundImage} render={() => <Content title={r.title} id={r.id} page={r.page} background={r.backgroundImage} color={r.color} date={r.date} />} /> 
				} else {
					return <Route path={"/" + r.backgroundImage}  render={() => <ComingSoon />} />
				}
				})	
    return (
    <Router>
      <div className="main-container">
		<div className="primary-content">
			<div className="sidebar">
				<div className="header">
					
					<img src="https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/logo.jpg" alt="lighthouse" className="logo" />	
					<h1>Adam&apos;s Adventures</h1>
					<button onClick={this.handleClick} className="button">						
						{ isOpened ? ( 
							<FontAwesome className='toggle' name='angle-double-up' size='2x'/>
						) : ( 
							<FontAwesome className='toggle'	name='angle-double-down' size='2x'/>
						)}
					</button>
					<Link to="/">
							<FontAwesome className='home' name='home' />
					</Link>		
			</div>
			<Collapse isOpened={this.state.isOpened}>
				<Sidebar 
					items={item}
				/>
			</Collapse>	
			</div>
			<div className="carousel">
				<Route exact path = "/" render={() => <Home/>}/>
				{routes}																										
			</div>
		</div>
		<div className="footer">
			<h2>Adam Bodie &copy; {year}</h2>
		</div>
      </div>
      </Router>
    );
  }
}

