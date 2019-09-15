import React from 'react'
import '../styles/header.scss'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'

const Header = () => (
	<header>
		<div className='header-logo'>
			<img src={'https://adventures.bodiewebdesign.com/_photos/logo.jpg'} alt='Logo' className='img-fluid' />
			<h1 data-testid='header-title'>Adam&apos;s Adventures</h1>
			<Link to='/pages'>
				<FontAwesome className='icon' name='home'/>
			</Link>
			<Link to='/tags'>
				<FontAwesome className='icon' name='tags'/>
			</Link>
		</div>
	</header>
)

export default Header;
