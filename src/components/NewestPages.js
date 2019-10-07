import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../styles/home.scss'
import '../styles/index.scss'
import Layout from './Layout'
import Card from './Card'
import NoNewProjects from './NoNewProjects';
import moment from 'moment'

export default class NewestPages extends Component {
	render() {
		const { data } = this.props;
        const posts = data.allItemJson.edges;
        const weeks = 1209600000;
        const newPosts = posts.map((x) => x)
                        .filter((x) => moment(x.node.date).isBetween((moment.now() - weeks), moment.now()))
        const newPostsLength = newPosts.length;
		return (
			<Layout>
				<div className='container'>
					<h1>Newest Projects Added</h1>
                    {newPostsLength === 0 ? 
                        (<NoNewProjects />) 
                        : 
                        (<h4 className='tagResults'>Results: {newPostsLength} Project{newPostsLength === 1 ? '' : 's'}</h4>)
                    }
					<div className='row'>
						{posts.map((x, index) => (
                            moment(x.node.date).isBetween((moment.now() - weeks), moment.now()) && (
							    <div className='col-lg-4' key={index} >
                                    <Card
                                        mainId={x.node.mainId}
                                        backgroundImage={x.node.backgroundImage}
                                        backgroundColor={x.node.backgroundColor}
                                        color={x.node.color}
                                        description={x.node.description}
                                        tags={x.node.tags}
                                        date={x.node.date}
                                        startDate={x.node.startDate}
                                        endDate={x.node.endDate}
                                        isExternal={x.node.isExternal}
                                    />
                            </div>
                        ))
                    )}
					</div>
				</div>
			</Layout>
		)
	}
}

export const listQuery = graphql`
  	query newestProjectListQuery {
		allItemJson( sort: {fields: [date, mainId], order: [DESC, DESC]} ) {
		edges {
			node {
				mainId
				backgroundImage
				title
				category
				color
				backgroundColor
				startDate
				endDate
				description
				isExternal
				tags
				date
			}
		}
	}
}
`
