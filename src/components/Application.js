// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
	let width = 4;
	let height = 3;
    return (
      <div>
		<div className="header">
			<h1>Adam's Adventures</h1>
		</div>
		<div className="content">
			<div className="sidebar">
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>
			<img src="http://via.placeholder.com/200x200"/>						
			</div>
			<div className="carousel">
			
			</div>
		</div>
		<div className="footer">
			<h3>Adam Bodie &copy; 2017</h3>
		</div>
      </div>
    );
  }
}

export default Application;
