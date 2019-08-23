import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from "lodash/kebabCase";
import "../styles/tags.scss";
import Layout from '../components/Layout';


export default class AllTags extends Component {
	render() {
		const { data } = this.props;
		const tags = data.allItemJson.distinct;
		return (
			<Layout>
				<div className="container">
					<h1>Tags</h1>
						<ul className="tags">
						{tags.map((x, index) => (
							<li key={index}>
								<Link to={`/tags/${kebabCase(x)}`}>{x}</Link>
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
			distinct(field: tags)
		}
}
`
