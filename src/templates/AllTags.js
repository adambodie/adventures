import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from "lodash/kebabCase";
import "../styles/tags.scss";
import Layout from '../components/Layout';

export default class AllTags extends Component {
	render() {
		const { data } = this.props;
		const tags = data.allItemJson.group;
		return (
			<Layout>
				<div className="container">
					<h1>Tags</h1>
						<ul className="tags row">
						{tags.map((x, index) => (
							<li className="col-md-4" key={index}>
								<Link to={`/tags/${kebabCase(x.fieldValue)}`}>{x.fieldValue} ({x.totalCount})</Link>
							</li>
						))}
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
