import React from 'react'
import '../styles/header.scss'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'
import ReactTooltip from 'react-tooltip'

const links = [
	{'link': '/pages', 'name': 'home', 'data': 'Home'},
	{'link': '/newest', 'name': 'star', 'data': 'Newest'},
	{'link': '/tags/location', 'name': 'globe', 'data': 'Tags By Location'},
	{'link': '/tags/type', 'name': 'tags', 'data': 'Tags By Type'},
]

const Header = () => (
	<header>
		<div className='header-logo'>
			<img src={'https://adventures.bodiewebdesign.com/_photos/logo.jpg'} alt='Logo' className='img-fluid' />
			<h1 data-testid='header-title'>Adam&apos;s Adventures</h1>
			{links.map((x, index) => {
				return(
				<Link key={index} to={x.link}>
					<FontAwesome className='icon' name={x.name} data-tip={x.data}/>
				</Link>
				)
			})}
		</div>
		<ReactTooltip />
	</header>
)

export default Header;
