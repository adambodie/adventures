import React from "react"
import "../styles/index.css"
import { Link } from "react-router-dom"

const Home = ({ data }) => {
	return (
	<div className="frontPage">
		{data.map((x, index) => (
			<div className="item" key={index} >
				<Link to={`/${x.node.backgroundImage}`}>
					<img src={`https://adventures.bodiewebdesign.com/photos/links/adventure${index+1}.jpg`} alt={x.node.backgroundImage} />
				</Link>
			</div>
		))}
		</div>
	)
}

export default Home;
