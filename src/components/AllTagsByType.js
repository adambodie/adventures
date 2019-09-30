import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import '../styles/tags.scss'
import Layout from './Layout'

export default class AllTagsByType extends Component {
	render() {
		const { data } = this.props;
        const tags = data.allItemJson.group;
		return (
			<Layout>
				<div className='container'>
					<h1>Tags by Project Type</h1>
						<ul className='tags tags-type row'>
						{tags.map((x, index) => (
							<li className='col-md-4' key={index}>
								<Link to={`/tags/type/${kebabCase(x.fieldValue)}`}>{x.fieldValue} ({x.totalCount})</Link>
							</li>
						))}
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