import React from "react"
import { graphql } from "gatsby"
import "../styles/home.css"
import "../styles/index.css"
import Layout from '../components/Layout';
import Card from '../components/Card';

export default ({ data }) => {
	return (
		<Layout>
			<div className="container">
				<h1>Gallery</h1>
				<div className="row">
					{data.allItemJson.edges.map((x, index) => (
					<div className="col-md-3" key={index} >
							<Card
								index={index}
								backgroundImage={x.node.backgroundImage}
								backgroundColor={x.node.backgroundColor}
								color={x.node.color}
								description={x.node.description}
							/>
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
			color
			backgroundColor
			year
			description
			}
		}
	}
}
`


