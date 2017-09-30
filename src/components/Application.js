// Libs
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';

//hawaii - 72157686468511520 - 76
//vegas - 72157687042225613 - 37
//wildwildwest - 72157688485135075 - 300

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
		backgroundImage: 'vegas',
		photosetId: '72157687042225613',
		perPage: 37
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

