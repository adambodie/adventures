import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss'

export default class Pagination extends Component {
	render() {
		const { isFirst, prevPage, numPages, nextPage, isLast } = this.props;
		return(
				<ul>
					{!isFirst && (<Link to={prevPage} rel="prev">← Prev</Link>)}
					{Array.from({ length: numPages }, (_, i) => (
						<li key={`pagination-number${i + 1}`}>
							<Link to={`/${i === 0 ? '' : i + 1}`}>
									{i + 1}
								</Link>
							</li>
						))}
					{!isLast && (<Link to={nextPage} rel="next">Next →</Link>)}
				</ul>
		);
	}
}
