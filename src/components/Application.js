// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Content from './Content';
import Sidebar from './Sidebar';

const Vegas = () => ( <Content title='High School Graduation Trip to Las Vegas' id='72157687042225613' page= '37' background='vegas' color='gold' /> );
const Hawaii = () => ( <Content title='Mahalo Fora Maui' id='72157686468511520' page= '76' background='hawaii' color='gold' /> );
const Europe = () => ( <Content title='My Trip to Europe' id='72157686893038650' page= '138' background='europe' color='gold' /> );
const Seattle = () => ( <Content title='Birthday Trip to Seattle' id='72157687246355471' page= '32' background='seattle' color='black' /> );
const CrossCountry = () => ( <Content title='Cross Country Trip to Minnesota' id='72157688200510913' page= '66' background='cross-country' color='white' /> );

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {		
		items: [
			{backgroundImage: 'vegas', component: 'Vegas'},
			{backgroundImage: 'hawaii', component: 'Hawaii'},
			{backgroundImage: 'europe', component: 'Europe'},
			{backgroundImage: 'seattle', component: 'Seattle'},
			{backgroundImage: 'cross-country', component: 'CrossCountry'}
          ]
    };
  }

  render(){
	/*let routes = this.state.items.map((x) =>
			<Route path={`/${x.backgroundImage}`} component={x.component}/>
    )*/
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
				<Route path="/vegas" component={Vegas}/>
				<Route path="/hawaii" component={Hawaii}/>
				<Route path="/europe" component={Europe}/>
				<Route path="/seattle" component={Seattle}/>
				<Route path="/cross-country" component={CrossCountry}/>
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

