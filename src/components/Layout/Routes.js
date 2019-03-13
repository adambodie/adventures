import React from 'react';
import { Route } from 'react-router-dom'
import PhotoContainer from '../Photos/PhotoContainer';
import Home from '../Other/Home';
import ComingSoon from '../Other/ComingSoon';

const Routes = ({items}) => {
	return (
		<div className="carousel">
			<Route exact path = "/" render={() => <Home items={items}/>}/>
				{items.map((r, index) => {
					if (r.completed) {
						return <Route exact path={"/" + r.backgroundImage} 
								key={index} 
								render={() => 
									<PhotoContainer 
										key={index} 
										title={r.title} 
										category={r.category} 
										id={r.id} 
										page={r.page} 
										background={r.backgroundImage} 
										color={r.color} 
										date={r.date} 
									/>
								} 
							/> 
							} else {
								return <Route 
											path={"/" + r.backgroundImage} 
											key={index} 
											render={() => <ComingSoon />} 
										/>
							}
					})}
			</div>
		);
	}

export default Routes;
