import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/tags.scss'
import Layout from './Layout'
import Tags from './Tags'

export default class AllTags extends Component {
	render() {
		const { data } = this.props;
		const tags = data.allItemJson.group;
		return (
			<Layout>
				<div className='container'>
					<h1>Tags by Location</h1>
						<ul className='tags row'>
							<Tags tags={tags} link={'location'} />
						</ul>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query allTagsQuery {
		allItemJson {
			group(field: tags) {
				fieldValue
				totalCount
			}
		}
	}
`
