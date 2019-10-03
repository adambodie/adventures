import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import '../styles/tags.scss'

const Tags = ({tags, link}) => (
	tags.map((x, index) => (
		<li className='col-md-4' key={index}>
			<Link to={`/tags/${link}/${kebabCase(x.fieldValue)}`}>{x.fieldValue} ({x.totalCount})</Link>
		</li>
	))
)

export default Tags;

