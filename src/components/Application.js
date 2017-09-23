// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Sidebar from './Sidebar';
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		backgroundImage: "url('./src/images/background.jpg')"
    };
    this.handleBackgroundImageChange = this.handleBackgroundImageChange.bind(this);
  }
  handleBackgroundImageChange(backgroundImage){
    this.setState({backgroundImage: backgroundImage});
  }
  render() {
	  const carouselStyle = {
		backgroundImage: this.state.backgroundImage,
    backgroundSize: 'cover',
	}
    return (
      <div className="main-container">
		<div className="header">
			<h1>Adam&apos;s Adventures</h1>
		</div>
		<div className="primary-content">
			<div class="sidebar">
			<Sidebar
        onBackgroundImageChange={this.handleBackgroundImageChange}
      />
			</div>
			<div className="carousel" style={carouselStyle}>
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
