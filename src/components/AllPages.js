import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/home.scss'
import '../styles/index.scss'
import Layout from './Layout'
import Card from './Card'
import Pagination from './Pagination'

export default class AllPages extends Component {
	render() {
		const { data, pageContext } = this.props;
		const posts = data.allItemJson.edges;
		const { currentPage, numPages } = pageContext;
		const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
		const nextPage = (currentPage + 1).toString();
		return (
			<Layout>
				<div className='container'>
					<h1>All Projects</h1>
					<div className='row'>
						{posts.map((x, index) => {
							const { mainId, backgroundImage, backgroundColor, color, description, tags, date, startDate, endDate, isExternal } = x.node;
							return(
							<div className='col-lg-4' key={index} >
								<Card
									mainId={mainId}
									backgroundImage={backgroundImage}
									backgroundColor={backgroundColor}
									color={color}
									description={description}
									tags={tags}
									date={date}
									startDate={startDate}
									endDate={endDate}
									isExternal={isExternal}
								/>
							</div>
						)}
					)}
					</div>
					<Pagination 
						prevPage={prevPage} 
						numPages={numPages} 
						nextPage={nextPage}
						/>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query projectListQuery($skip: Int!, $limit: Int!)  {
		allItemJson( 
			sort: {fields: [date, mainId], order: [DESC, DESC]}
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
				startDate
				endDate
				description
				isExternal
				tags
				date
			}
		}
	}
}
`
