import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import '../styles/tags.scss'

const ContentTags = ({tags, colorStyle}) => (
    <div className='content-tags'>
		<p style={colorStyle}>
            <strong>Related Tags: </strong> 
            {tags.map((x, index) => {
				const space = (index === tags.length - 1) ? '' : ', ';
					return (
						<React.Fragment key={index}>
							<Link to={`/tags/location/${kebabCase(x)}`} style={colorStyle}>{x}</Link>
							{space}
						</React.Fragment>
						)
					}
                )
            }
        </p>
	</div>
)

export default ContentTags;

