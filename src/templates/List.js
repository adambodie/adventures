import React, { Component } from 'react';
import { graphql } from 'gatsby';
import "../styles/home.scss";
import "../styles/index.scss"
import Layout from '../components/Layout';
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export default class List extends Component {
	render() {
		const { data, pageContext } = this.props;
		const posts = data.allItemJson.edges;
		const { currentPage, numPages } = pageContext;
		const isFirst = currentPage === 1;
		const isLast = currentPage === numPages;
		const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
		const nextPage = (currentPage + 1).toString();
		return (
			<Layout>
				<div className="container">
					<h1>Gallery</h1>
					<div className="row">
						{posts.map((x, index) => (
							<div className="col-md-3" key={index} >
								<Card
									mainId={x.node.mainId}
									backgroundImage={x.node.backgroundImage}
									backgroundColor={x.node.backgroundColor}
									color={x.node.color}
									description={x.node.description}
								/>
							</div>
						))}
					</div>
					<Pagination 
						isFirst={isFirst} 
						prevPage={prevPage} 
						numPages={numPages} 
						nextPage={nextPage}
						isLast={isLast} 
						/>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query projectListQuery($skip: Int!, $limit: Int!)  {
		allItemJson( 
			sort: { fields: year, order: ASC }
			limit: $limit 
			skip: $skip
			) {
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
			}
		}
	}
}
`