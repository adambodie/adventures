// Libs
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';
import axios from 'axios';

export default class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
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
		const { items } = this.state;
		return (
		<Router>
			<div className="main-container">
				<Header />
				<div className="primary-content">
					<Routes items={items} />
				</div>
				<Footer />
			</div>
		</Router>
		);
	}
}
