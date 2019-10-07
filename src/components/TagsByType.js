import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/tags.scss'
import Layout from './Layout'
import Card from './Card'


export default class TagsByType extends Component {
	render() {
		const { data, pageContext } = this.props;
		const { type } = pageContext;
		const { edges, totalCount } = data.allItemJson;
		return (
			<Layout>
				<div className='container'>
					<h1>{type}</h1>
					<h4 className='tagResults'>Results: {totalCount} Project{totalCount === 1 ? '' : 's'}</h4>
					<div className='row'>
						{edges.map((x, index) => {
								const { mainId, backgroundImage, backgroundColor, color, description, date, startDate, endDate, isExternal } = x.node;
								return (
								<div className='col-md-4 link' key={index} >
									<Card
										mainId={mainId}
										backgroundImage={backgroundImage}
										backgroundColor={backgroundColor}
										color={color}
										description={description}
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
  	query projectTagByTypeQuery($type: String)  {
		allItemJson(
			sort: {fields: [date, mainId], order: [DESC, DESC]}
			filter: { type: { eq: $type }  }
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
                type
			}
		}
	}
}
`