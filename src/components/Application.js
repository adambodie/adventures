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
	let item = this.state.items;
	let isOpened = this.state.isOpened;
	let routes = item.map((r) => {
				if (r.completed) {
					return <Route exact path={"/" + r.backgroundImage} render={() => <Content title={r.title} category={r.category} id={r.id} page={r.page} background={r.backgroundImage} color={r.color} date={r.date} />} /> 
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

