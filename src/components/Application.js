// Libs
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import PhotoContainer from './PhotoContainer';
import Home from './Home';
import ComingSoon from './ComingSoon';
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
					<div className="carousel">
						<Route exact path = "/" render={() => <Home items={items}/>}/>
						{items.map((r, index) => {
							if (r.completed) {
								return <Route exact path={"/" + r.backgroundImage} 
											key={index} 
											render={() => 
												<PhotoContainer 
													key={index} 
													title={r.title} 
													category={r.category} 
													id={r.id} 
													page={r.page} 
													background={r.backgroundImage} 
													color={r.color} 
													date={r.date} 
													/>
											} 
										/> 
							} else {
								return <Route 
											path={"/" + r.backgroundImage} 
											key={index} 
											render={() => <ComingSoon />} 
										/>
							}
					})}
					</div>
				</div>
				<Footer />
			</div>
		</Router>
		);
	}
}
