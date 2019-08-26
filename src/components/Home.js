import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "./Layout"
import '../styles/landing.scss'

export default class Home extends Component {
	render() {
		return(
			<Layout>
			<div className="landing">
				<div className="container" style={{backgroundImage: 'url(../background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
				<h1>Welcome to Adam&apos;s Adventures!</h1>
				<div>
				<p>Over the years, I've made numerous trips throughout the U.S. and a few in Europe. Travelling and photography are two things I've excelled at over the years. It's a true passion I've always held. As such, I enjoyed showing off my photos to whoever I could show them to. I typically made slideshows of my photos with Microsoft Powerpoint, including facts and other tidbits to make it more than just a picture gallery.</p>
				<p>That was then. Now I'm able to make more creative and dynamic projects to show my photos, and with web projects, anyone can view them. My best examples of this increased creativity can be viewed for my trips to the Grand Canyon and to the East Coast. But I do enjoy my slideshows from the past, so I made this project to showcase all of them on the web for anyone to view. Be sure to come back and checkout out new slideshows being added.</p>
				</div>
				<Link to={'/pages'} className="btn btn-landing">Enter</Link>
				</div>
			</div>
			</Layout>
		)
	}
}
