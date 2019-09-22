import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'
import PhotoList from './PhotoList'

export default class Page extends Component {
	render() {
		const { data } = this.props;
		const item = data.itemJson;
		return(
			<Layout>
				<div style={{
					backgroundImage: `url('https://adventures.bodiewebdesign.com/_photos/backgrounds/${item.backgroundImage}.jpg')`,
					backgroundSize: 'cover'
				}} className='carousel-background'>
				<h1 className='title' style={{ color: item.color, textShadow: `-1px 0 ${item.backgroundColor}, 0 1px ${item.backgroundColor}, 1px 0 ${item.backgroundColor}, 0 -1px ${item.backgroundColor}` }}>{item.title}</h1>
				<PhotoList 
					pictures={item.pictures} 
					category={item.category} 
					page={item.page}
					color={item.color}
					backgroundColor={item.backgroundColor} 
					date={item.date}
					tags={item.tags}
					/>
				</div>
		</Layout>
		)
	}
}


export const query = graphql`
	query($mainId: String) {
		itemJson(mainId: { eq: $mainId }) {
			backgroundImage
			title
			category
			page
			color
			backgroundColor
			isExternal
			tags
			pictures {
				id
				title
			}
		}
	}
`
