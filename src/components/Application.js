// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';


export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
		backgroundImage: 'europe',
		photosetId: '72157686893038650',
		perPage: 138
    };
  }

  render() {
	  const carouselStyle = {
		backgroundImage: `url('./src/images/${this.state.backgroundImage}.jpg')`,
		backgroundSize: 'cover',
	}
    return (
      <div className="main-container">
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		</div>
		<div className="primary-content">
			<div class="sidebar">
				<Sidebar/>
			</div>
			<div className="carousel" style={carouselStyle}>
				<Content id={this.state.photosetId} page={this.state.perPage} />
			</div>
		</div>
		<div className="footer">
			<h3>Adam Bodie &copy; 2017</h3>
		</div>
      </div>
    );
  }
}

