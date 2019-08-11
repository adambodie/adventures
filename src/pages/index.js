import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Home from "../components/Home"
import Routes from "../components/Routes"

export default () => (
	<Router>
		<StaticQuery
			query={graphql`
				query ItemQuery {
					allItemJson {
						edges {
							node {
								backgroundImage
								title
								color
								completed
							}
						}
					}
				}
			`}
			render={data => (
				<div>
					<Header />
					<Route exact path = "/" render={() => <Home data={data.allItemJson.edges} />}/>
					<Routes data={data.allItemJson.edges} />
				</div>
			)}
		/>
	</Router>
)

