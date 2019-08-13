import React from "react"
import "../styles/home.css"
import { Link } from "react-router-dom"

const Home = ({ data }) => {
	return (
	<div className="container">
		<h1>Gallery</h1>
		<div className="row">
			{data.map((x, index) => (
				<div className="col-md-3" key={index} >
					<Link to={`/${x.node.backgroundImage}`}>
						<img src={`https://adventures.bodiewebdesign.com/photos/links/adventure${index+1}.jpg`} alt={x.node.backgroundImage} className="cards" />
					</Link>
				</div>
			))}
			</div>
	</div>
	)
}

export default Home;
