import React from 'react';
import { graphql, Link } from 'gatsby';
import "../styles/home.scss";
import "../styles/index.scss"
import Layout from '../components/Layout';
import Card from "../components/Card";

class List extends React.Component {
render() {
	const { data } = this.props;
	const posts = data.allItemJson.edges;
	const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
	return (
		<Layout>
			<div className="container">
				<h1>Gallery</h1>
				<div className="row">
					{posts.map((x, index) => (
						<div className="col-md-3" key={index} >
							<Card
								mainId={x.node.mainId}
								backgroundImage={x.node.backgroundImage}
								backgroundColor={x.node.backgroundColor}
								color={x.node.color}
								description={x.node.description}
							/>
						</div>
					))}
				</div>
				<ul>
          {!isFirst && (<Link to={prevPage} rel="prev">← Prev</Link>)}
          {Array.from({ length: numPages }, (_, i) => (
            <li key={`pagination-number${i + 1}`}>
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (<Link to={nextPage} rel="next">Next →</Link>)}
        </ul>
			</div>

		</Layout>
	)
}
}
export default List;
export const listQuery = graphql`
  	query projectListQuery($skip: Int!, $limit: Int!)  {
		allItemJson( 
			sort: { fields: year, order: ASC }
			limit: $limit 
			skip: $skip
			) {
		edges {
			node {
				mainId
				backgroundImage
				title
				category
				color
				backgroundColor
				year
				description
			}
		}
	}
}
`
