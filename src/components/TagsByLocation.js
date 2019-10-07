import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/tags.scss'
import Layout from './Layout'
import Card from './Card'


export default class Tags extends Component {
	render() {
		const { data, pageContext } = this.props;
		const { tag } = pageContext;
		const { edges, totalCount } = data.allItemJson;
		return (
			<Layout>
				<div className='container'>
					<h1>{tag}</h1>
					<h4 className='tagResults'>Results: {totalCount} Project{totalCount === 1 ? '' : 's'}</h4>
					<div className='row'>
						{edges.map((x, index) => {
							const { mainId, backgroundImage, backgroundColor, color, description, tags, date, startDate, endDate, isExternal } = x.node;
								return (
								<div className='col-md-4 link' key={index} >
									<Card
										mainId={mainId}
										backgroundImage={backgroundImage}
										backgroundColor={backgroundColor}
										color={color}
										description={description}
										tags={tags}
										isExternal={isExternal}
										date={date}
										startDate={startDate}
										endDate={endDate}
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
			sort: {fields: [date, mainId], order: [DESC, DESC]}
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
				startDate
				endDate
				date
				description
				isExternal
				tags
			}
		}
	}
}
`
