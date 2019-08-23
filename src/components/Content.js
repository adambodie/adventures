import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PhotoList from "../components/PhotoList"
import ComingSoon from "../components/ComingSoon"

export default class Content extends Component {
	render() {
		const { data } = this.props;
		return(
			<Layout>
			{data.itemJson.completed ? (
				<div style={{
					backgroundImage: `url('https://adventures.bodiewebdesign.com/photos/backgrounds/${data.itemJson.backgroundImage}.jpg')`,
					backgroundSize: 'cover'
				}} className='carousel-background'>
				<h1 className="title" style={{ color: data.itemJson.color, textShadow: `-1px 0 ${data.itemJson.backgroundColor}, 0 1px ${data.itemJson.backgroundColor}, 1px 0 ${data.itemJson.backgroundColor}, 0 -1px ${data.itemJson.backgroundColor}` }}>{data.itemJson.title}</h1>
				<PhotoList 
					pictures={data.itemJson.pictures} 
					category={data.itemJson.category} 
					page={data.itemJson.page}
					color={data.itemJson.color}
					backgroundColor={data.itemJson.backgroundColor} 
					date={data.itemJson.date}
					tags={data.itemJson.tags}
					/>
				</div>
				) : (<ComingSoon/>)
				}
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
			completed
			tags
			pictures {
				id
				title
			}
		}
	}
`
