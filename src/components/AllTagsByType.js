import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/tags.scss'
import Layout from './Layout'
import Tags from './Tags'

export default class AllTagsByType extends Component {
	render() {
		const { data } = this.props;
        const tags = data.allItemJson.group;
		return (
			<Layout>
				<div className='container'>
					<h1>Tags by Project Type</h1>
					<ul className='tags tags-type row'>
						<Tags tags={tags} link={'type'} />
					</ul>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query allTagsByTypeQuery {
		allItemJson {
			group(field: type) {
				fieldValue
				totalCount
			}
		}
	}
`