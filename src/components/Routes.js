import React from 'react'
import '../styles/index.css'
import { Route } from 'react-router-dom'
//~ item.map((r) => {
	//~ if (r.completed) {
	//~ return <Route exact path={"/" + r.backgroundImage} render={() => <Content title={r.title} category={r.category} id={r.id} page={r.page} background={r.backgroundImage} color={r.color} date={r.date} />} /> 
	//~ } else {
	//~ return <Route path={"/" + r.backgroundImage}  render={() => <ComingSoon />} />
	//~ }
//~ })


const Routes = ({ data }) => {
	return (
		data.map((x, index) => (
			<Route 	exact path={"/" + x.node.backgroundImage} 
					key={index} 
					render={() => <h1 style={{color: x.node.color}}>{x.node.title}</h1>} 
			/> 
		))
	)
}

export default Routes;
