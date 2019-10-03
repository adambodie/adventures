import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './Layout'
import PhotoList from './PhotoList'
import ContentTags from './ContentTags'

export default class Page extends Component {
	render() {
		const { data } = this.props;
		const item = data.itemJson;
		const { backgroundColor, backgroundImage, color, title, pictures, category, page, date, tags } = item;
		const backgroundStyle = {
			backgroundImage: `url('https://adventures.bodiewebdesign.com/_photos/backgrounds/${backgroundImage}.jpg')`,
			backgroundSize: 'cover'
		}
		const titleStyle = { 
				color: color, 
				textShadow: ` -1px 0 ${backgroundColor}, 0 1px ${backgroundColor}, 1px 0 ${backgroundColor}, 0 -1px ${backgroundColor}`
			}
		const colorStyle = {
			color: color
		}
		return(
			<Layout>
				<React.Fragment>
					<div style={backgroundStyle} className='carousel-background'>
						<h1 className='title' style={titleStyle}>{title}</h1>
						<PhotoList 
							pictures={pictures} 
							category={category} 
							page={page}
							color={color}
							backgroundColor={backgroundColor} 
							date={date}
							/>
					</div>
					<ContentTags tags={tags} colorStyle={colorStyle} />
				</React.Fragment>
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
