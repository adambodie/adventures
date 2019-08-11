import React from 'react'
import '../styles/index.css'
import Content from './Content'
import ComingSoon from './ComingSoon'
import { Route } from 'react-router-dom'

const Routes = ({ data }) => {
	return (
		data.map((x, index) => {
			if (x.node.completed) {
				return (
						<Route exact path={"/" + x.node.backgroundImage} 
								key={index} 
								render={() => 
											<Content 
												pictures={x.node.pictures}
												title={x.node.title} 
												category={x.node.category} 
												id={x.node.id} 
												page={x.node.page} 
												backgroundImage={x.node.backgroundImage} 
												color={x.node.color} 
												date={x.node.date} 
										/>
								} 
							/>
						)
			} else {
				return <Route path={"/" + x.node.backgroundImage} key={index} render={() => <ComingSoon />} />
			} 
		})
	)
}

export default Routes;
