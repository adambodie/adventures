import React from 'react'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Header = () => {
	return (
		<div className="header">
			<img src="https://s3-us-west-2.amazonaws.com/adventures.bodiewebdesign.com/photos/logo.jpg" alt="lighthouse" className="logo" />
			<h1>Adam's Adventures</h1>
			<Link to="/"><FontAwesome className='home' name='home' /></Link>
		</div>
	)
}

export default Header;
