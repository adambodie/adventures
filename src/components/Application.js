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

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {		
		items: [
			{backgroundImage: 'vegas', completed: true},
			{backgroundImage: 'hawaii', completed: true},
			{backgroundImage: 'europe', completed: true},
			{backgroundImage: 'seattle', completed: true},
			{backgroundImage: 'cross-country', completed: true},
			{backgroundImage: 'minnesota', completed: false},
			{backgroundImage: 'green-bay', completed: false},
			{backgroundImage: 'kansas-city', completed: false},
			{backgroundImage: 'chicago', completed: false},
			{backgroundImage: 'mississippi', completed: false},
			{backgroundImage: 'sioux-falls', completed: false},
			{backgroundImage: 'boston', completed: false},
			{backgroundImage: 'italy', completed: false},
			{backgroundImage: 'winter-2008', completed: false},
			{backgroundImage: 'spring-2008', completed: false},
			{backgroundImage: 'denver', completed: false},
			{backgroundImage: 'summer-2008', completed: false},
			{backgroundImage: 'seattle-2008', completed: false},
			{backgroundImage: 'san-francisco', completed: false},
			{backgroundImage: 'fall-2008', completed: false},
			{backgroundImage: 'hawaii-2008', completed: false}						
      ]
    };
  }

  render(){
	let routes = this.state.items.map((r) => {
				if (!r.completed) {
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
					items={this.state.items}
				/>
			</div>
			<div className="carousel">
				<Route exact path = "/" render={() => <Home />}/>
				<Route path="/vegas" render={() => <Content title='High School Graduation Trip to Las Vegas' id='72157687042225613' page= '37' background='vegas' color='lightblue' date='July 13, 2003 - July 16, 2003' />}/>
				<Route path="/hawaii" render={() => <Content title='Mahalo Fora Maui' id='72157686468511520' page= '76' background='hawaii' color='#FF9933' date='September 1, 2004 - September 8, 2004' />  }/>
				<Route path="/europe" render={() => <Content title='My Trip to Europe' id='72157686893038650' page= '138' background='europe' color='gold' date='May 19, 2005 - June 4, 2005' />  }/>
				<Route path="/seattle" render={() => <Content title='Birthday Trip to Seattle' id='72157687246355471' page= '32' background='seattle' color='black' date='May 12, 2006 - May 13, 2006' /> }/>
				<Route path="/cross-country" render={() => <Content title='Cross Country Trip to Minnesota' id='72157688200510913' page= '66' background='cross-country' color='white' date='August 29, 2006 - September 1, 2006' /> }/>
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

