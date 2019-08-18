import React from "react"
import "../styles/home.scss"
import { Link } from "react-router-dom"

const Home = ({ data }) => {
	return (
	<div className="container">
		<h1>Gallery</h1>
		<div className="row">
			{data.map((x, index) => (
				<div className="col-md-3" key={index} >
				<Link to={`/${x.node.backgroundImage}`}>
					<div className="flip-card">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img src={`https://adventures.bodiewebdesign.com/photos/links/adventure${index+1}.jpg`} alt={x.node.backgroundImage} className="cards" />
							</div>
							<div className="flip-card-back" style={{backgroundColor: x.node.backgroundColor}}>
								<p style={{color: x.node.color, fontWeight: 'bold'}}>{x.node.description}</p>
							</div>
						</div>
					</div>
				</Link>
				</div>
			))}
			</div>
	</div>
	)
}

export default Home;


