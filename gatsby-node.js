const path = require(`path`)
const _ = require(`lodash`)

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const PageTemplate = path.resolve("./src/components/Page.js")
	const result = await graphql(`
		{
		allItemJson {
			edges {
				node {
					mainId
					backgroundImage
					title
					category
					page
					color
					backgroundColor
					completed
					startDate
					endDate
					description
					date
					tags
					pictures {
						id
						title
					}
				}
			}
			group(field: tags) {
				fieldValue
			}
			
		}
	}
`)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	//Home page
	createPage({
		path: `/`,
		component: path.resolve(`./src/components/Home.js`),
	});


	const Page = result.data.allItemJson.edges;
	const Tags = result.data.allItemJson.group;
	
	const postsPerPage = 12;
	const numPages = Math.ceil(Page.length / postsPerPage);
	
	
	// Pages with pagination
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/pages/` : `/pages/${i + 1}`,
			component: path.resolve(`./src/components/AllPages.js`),
			context: { limit: postsPerPage, skip: i * postsPerPage, numPages, currentPage: i + 1} }
			);
		});
	// Pages master
	Page.forEach(post => {
		createPage({
			path: `${post.node.backgroundImage}`,
			component: PageTemplate,
			context: {
				mainId: post.node.mainId,
				backgroundImage: post.node.backgroundImage,
				title: post.node.title,
				category: post.node.category,
				page: post.node.page,
				color: post.node.color,
				completed: post.node.completed,
				backgroundColor: post.node.backgroundColor,
				pictures: post.node.pictures
			},
		})
	})
	
	//Tags master
	createPage({
		path: `/tags`,
		component: path.resolve(`./src/components/AllTags.js`),
	});
	
	//Individual tags
	Tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/components/Tags.js`),
			context: {
				tag: tag.fieldValue,
			},
		})
	})
}

