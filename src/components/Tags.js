import React, { Component } from 'react';
import { graphql } from 'gatsby';
import "../styles/tags.scss";
import Layout from './Layout';
import Card from "./Card";


export default class Tags extends Component {
	render() {
		const { data, pageContext } = this.props;
		const { tag } = pageContext;
		const { edges, totalCount } = data.allItemJson;
		return (
			<Layout>
				<div className="container">
					<h1>{tag}</h1>
					<h4 className="tagResults">Results: {totalCount} post{totalCount === 1 ? "" : "s"}</h4>
					<div className="row">
						{edges.map((x, index) => {
								return (
								<div className="col-md-4 link" key={index} >
									<Card
										mainId={x.node.mainId}
										backgroundImage={x.node.backgroundImage}
										backgroundColor={x.node.backgroundColor}
										color={x.node.color}
										description={x.node.description}
										tags={x.node.tags}
									/>
								</div>)
							})
						}
					</div>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query projectTagQuery($tag: String)  {
		allItemJson(
			sort: { fields: year, order: ASC }
			filter: { tags: { in: [$tag] }  }
		) {
		totalCount
		edges {
			node {
				mainId
				backgroundImage
				title
				category
				color
				backgroundColor
				year
				description
				tags
			}
		}
	}
}
`
