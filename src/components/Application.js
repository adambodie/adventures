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


export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {		
		items: [
			{backgroundImage: 'vegas'},
			{backgroundImage: 'hawaii'},
			{backgroundImage: 'europe'},
			{backgroundImage: 'seattle'},
			{backgroundImage: 'cross-country'}
          ]
    };
  }

  render(){
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
				<Route path="/vegas" render={() => <Content title='High School Graduation Trip to Las Vegas' id='72157687042225613' page= '37' background='vegas' color='gold' />}/>
				<Route path="/hawaii" render={() => <Content title='Mahalo Fora Maui' id='72157686468511520' page= '76' background='hawaii' color='gold' />  }/>
				<Route path="/europe" render={() => <Content title='My Trip to Europe' id='72157686893038650' page= '138' background='europe' color='gold' />  }/>
				<Route path="/seattle" render={() => <Content title='Birthday Trip to Seattle' id='72157687246355471' page= '32' background='seattle' color='black' /> }/>
				<Route path="/cross-country" render={() => <Content title='Cross Country Trip to Minnesota' id='72157688200510913' page= '66' background='cross-country' color='white' /> }/>
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

