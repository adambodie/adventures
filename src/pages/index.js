import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../index.css"
import Header from './Header'

export default () => (
  <StaticQuery
    query={graphql`
      query JsonQuery {
		allLettersJson {
			edges {
				node {
					value,
					name
				}
			}
		}
      }
    `}
    render={data => (
      <header>
		<Header />
        {data.allLettersJson.edges.map((x, index) => (
				<div key={index} >
				<p>{x.node.value}</p>
				<p>{x.node.name}</p>
				</div>
		))}
      </header>
    )}
  />
)

