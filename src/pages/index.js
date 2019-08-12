import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import {Helmet} from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Home from "../components/Home"
import Routes from "../components/Routes"

export default () => (
	<Router>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Adam's Adventures</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
			<link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />
		</Helmet>
		<StaticQuery
			query={graphql`
				query ItemQuery {
					allItemJson {
						edges {
							node {
								backgroundImage
								title
								category
								page
								color
								completed
								pictures {
									id
									title
								}
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

