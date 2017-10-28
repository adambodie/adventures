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
			{backgroundImage: 'vegas', title: 'High School Graduation Trip to Las Vegas', id:'72157687042225613', page:'37', color:'lightblue', date:'July 13, 2003 - July 16, 2003', completed: true},
			{backgroundImage: 'hawaii', title: 'Mahalo Fora Maui', id:'72157686468511520', page:'76', color:'#FF9933', date:'September 1, 2004 - September 8, 2004', completed: true},
			{backgroundImage: 'europe', title: 'My Trip to Europe', id:'72157686893038650', page:'138', color:'gold', date:'May 19, 2005 - June 4, 2005', completed: true},
			{backgroundImage: 'seattle', title: 'Birthday Trip to Seattle', id:'72157687246355471', page:'32',  color:'black', date:'May 12, 2006 - May 13, 2006', completed: true},
			{backgroundImage: 'cross-country', title: 'Cross Country Trip to Minnesota', id:'72157688200510913', page:'66', color:'white', date:'August 29, 2006 - September 1, 2006', completed: true},
			{backgroundImage: 'minnesota', title: 'Cross Country Trip to Minnesota', id:'72157688415662014', page:'82', color:'black', date:'September 4, 2006 - November 21, 2006', completed: true},
			{backgroundImage: 'green-bay', title: 'My Cheesy Trip to Green Bay', id: '72157688332691124', page: '45', color: 'yellow', date: 'December 19, 2006 - December 20, 2006', completed: true},
			{backgroundImage: 'kansas-city', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'chicago', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'mississippi', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'sioux-falls', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'boston', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'italy', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'winter-2008', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'spring-2008', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'denver', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'summer-2008', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'seattle-2008', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'san-francisco', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'fall-2008', title: null, id: null, page: null, color: null, date: null, completed: false},
			{backgroundImage: 'hawaii-2008', title: null, id: null, page: null, color: null, date: null, completed: false}						
      ]
    };
  }

  render(){
	let routes = this.state.items.map((r) => {
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
					items={this.state.items}
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

