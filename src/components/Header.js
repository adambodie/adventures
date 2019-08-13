import React from "react"
import "../styles/header.css"
import { Link } from "react-router-dom"
import FontAwesome from "react-fontawesome";

const Header = () => (
	<header>
		<img src={"../logo.jpg"} alt="Logo" className="img-fluid" />
		<h1>Adam&apos;s Adventures</h1>
		<Link to="/">
			<FontAwesome className='home' size='2x' name='home' />
		</Link>
		<div className="search">
			<input type="text" placeholder="Search.."/>
			<button type="submit"><FontAwesome name='search' /></button>
		</div>
	</header>
)

export default Header
