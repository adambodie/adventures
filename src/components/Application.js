// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';
class Application extends React.Component {
  constructor() {
    super();
    this.state = {

    };

  }

  render() {
    return (
      <div className="main-container">
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		</div>
		<div className="primary-content">
			<div class="sidebar">
			<Sidebar />	
			</div>
			<div className="carousel">
				<Content />
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
