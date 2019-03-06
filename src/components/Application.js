// Libs
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Content from './Content';
import Sidebar from './Sidebar';
import Home from './Home';
import ComingSoon from './ComingSoon';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';


export default class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			length: []
		};
	}
	componentDidMount() {
		let json = 'https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/data/item.json';
		  axios.get(json)
			.then(response => {
				this.setState({
					items: response.data
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing Items data', error);
			});
		}
	render(){
		const year = new Date().getFullYear();
		const { items } = this.state;
		let routes = items.map((r, index) => {
			if (r.completed) {
				return <Route exact path={"/" + r.backgroundImage} key={index} render={() => <Content key={index} title={r.title} category={r.category} id={r.id} page={r.page} background={r.backgroundImage} color={r.color} date={r.date} />} /> 
			} else {
				return <Route path={"/" + r.backgroundImage} key={index} render={() => <ComingSoon />} />
			}
	})
	return (
		<Router>
			<div className="main-container">
				<div className="primary-content">
					<div className="sidebar">
						<div className="header">
							<img src="https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/logo.jpg" alt="lighthouse" className="logo" />	
							<h1>Adam's Adventures</h1>
							<Link to="/"><FontAwesome className='home' name='home' /></Link>
						</div>
						<Sidebar items={items} />
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
