import React from 'react'
import '../styles/header.scss'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'
import ReactTooltip from 'react-tooltip'

const Header = () => (
	<header>
		<div className='header-logo'>
			<img src={'https://adventures.bodiewebdesign.com/_photos/logo.jpg'} alt='Logo' className='img-fluid' />
			<h1 data-testid='header-title'>Adam&apos;s Adventures</h1>
			<Link to='/pages'>
				<FontAwesome className='icon' name='home' data-tip='Home'/>
			</Link>
			<Link to='/tags/location'>
				<FontAwesome className='icon' name='globe' data-tip='Tags By Location'/>
			</Link>
			<Link to='/tags/type'>
				<FontAwesome className='icon' name='tags' data-tip='Tags By Type'/>
			</Link>
		</div>
		<ReactTooltip />
	</header>
)

export default Header;
