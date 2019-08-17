import React from "react"
import { graphql } from "gatsby"
import "../styles/home.css"
import { Link } from "gatsby"
import Layout from '../components/Layout';

export default ({ data }) => {
	return (
		<Layout>
			<div className="container">
			<h1>Gallery</h1>
			<div className="row">
				{data.allItemJson.edges.map((x, index) => (
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
	</Layout>
  )
}
export const query = graphql`
  query {
    allItemJson {
		edges {
			node {
			backgroundImage
			title
			category
			page
			color
			backgroundColor
			completed
			year
			description
			pictures {
				id
				title
				}
			}
		}
	}
}
`


