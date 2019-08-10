import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../index.css"
import Header from './Header'

export default () => (
  <StaticQuery
    query={graphql`
      query ItemQuery {
		allItemJson {
			edges {
				node {
					backgroundImage
				}
			}
		}
      }
    `}
    render={data => (
      <div>
		<Header />
		<div className="frontPage">
        {data.allItemJson.edges.map((x, index) => (
			<div className="item" key={index} >
				<img src={`https://adventures.bodiewebdesign.com/photos/links/adventure${index+1}.jpg`} alt={x.node.backgroundImage} />
			</div>
		))}
		</div>
      </div>
    )}
  />
)

