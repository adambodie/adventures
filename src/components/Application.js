// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
		isOpened: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
	handleClick() {
		this.setState(prevState => ({
			isOpened: !prevState.isOpened
		}));
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
	let item = this.state.items;
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
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		    <Link to="/">
			<FontAwesome 
				className='home'
				name='home'
				size='2x'
			/>
			</Link>			
		</div>
		
		<div className="primary-content">
			<div class="sidebar">
			<button onClick={this.handleClick} className="button">	
				{ isOpened ? ( 
					<FontAwesome 
						className='toggle'
						name='angle-double-up'
						size='2x'
					/>
				) : ( 
					<FontAwesome 
						className='toggle'
						name='angle-double-down'
						size='2x'
					/>
				)}
			</button>
			<Collapse isOpened={this.state.isOpened}>
				<Sidebar 
					items={item}
				/>
			</Collapse>	
			</div>
			<div className="carousel">
				<Route exact path = "/" render={() => <Home />}/>
				{routes}																										
			</div>
		</div>
		<div className="footer">
			<h2>Adam Bodie &copy; 2017</h2>
		</div>
      </div>
      </Router>
    );
  }
}

