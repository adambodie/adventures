// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Content from './Content';
import Sidebar from './Sidebar';
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
		let json = '../src/item.json'
		  axios.get(json)
			.then(response => {;
				this.setState({
					items: response.data
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing data', error);
			});
		}
  render(){
	let item = this.state.items
	let routes = item.map((r) => {
				if (r.completed) {
					return <Route path={"/" + r.backgroundImage} render={() => <Content title={r.title} id={r.id} page={r.page} background={r.backgroundImage} color={r.color} date={r.date} />} /> 
				} else {
					return <Route path={"/" + r.backgroundImage}  render={() => <ComingSoon />} />
				}
				})	
    return (
      <div className="main-container">
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		</div>
		<Router>
		<div className="primary-content">
			<div class="sidebar">
				<Sidebar 
					items={item}
				/>
			</div>
			<div className="carousel">
				<Route exact path = "/" render={() => <Home />}/>
				{routes}																										
			</div>
		</div>
		</Router>
		<div className="footer">
			<h2>Adam Bodie &copy; 2017</h2>
		</div>
      </div>
    );
  }
}

