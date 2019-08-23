import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss'

export default class Pagination extends Component {
	render() {
		const { prevPage, numPages, nextPage } = this.props;
		return(
			<div className="paginate">
				<ul className="paginate-pages">
					<li><Link to={`${prevPage > 0 ? prevPage : '/'}`} rel="prev">← Prev</Link></li>
					{Array.from({ length: numPages }, (_, i) => (
						<li key={`pagination-number${i + 1}`}>
							<Link to={`/${i === 0 ? '' : i + 1}`} activeStyle={{ backgroundColor: "#7a859a" }}>
								{i + 1}
							</Link>
						</li>
					))}
					<li><Link to={`${nextPage > numPages ? numPages : nextPage}`} rel="next">Next →</Link></li>
				</ul>
			</div>
		);
	}
}
