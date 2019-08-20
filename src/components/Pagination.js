import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss'

export default class Pagination extends Component {
	render() {
		const { isFirst, prevPage, numPages, nextPage, isLast } = this.props;
		return(
			<div className="paginate">
				<ul>
					{!isFirst && (<li><Link to={prevPage} rel="prev">← Prev</Link></li>)}
					{Array.from({ length: numPages }, (_, i) => (
						<li key={`pagination-number${i + 1}`}>
							<Link to={`/${i === 0 ? '' : i + 1}`}>
									{i + 1}
								</Link>
							</li>
						))}
					{!isLast && (<li><Link to={nextPage} rel="next">Next →</Link></li>)}
				</ul>
			</div>
		);
	}
}
