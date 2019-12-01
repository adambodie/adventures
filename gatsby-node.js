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
					isExternal
					startDate
					endDate
					description
					date
					tags
					type
					pictures {
						id
						title
					}
				}
			}
			locationGroup: group(field: tags) {
				fieldValue
			}
			typeGroup: group(field: type) {
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

	//Home page
	createPage({
		path: `/newest/`,
		component: path.resolve(`./src/components/NewestPages.js`),
	});

	const Page = result.data.allItemJson.edges;
	const Tags = result.data.allItemJson.locationGroup;
	const TagTypes = result.data.allItemJson.typeGroup;
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
		if (!post.node.isExternal) {
			createPage({
				path: `/pages/${post.node.backgroundImage}`,
				component: PageTemplate,
				context: {
					mainId: post.node.mainId,
					backgroundImage: post.node.backgroundImage,
					title: post.node.title,
					category: post.node.category,
					page: post.node.page,
					color: post.node.color,
					isExternal: post.node.isExternal,
					backgroundColor: post.node.backgroundColor,
					pictures: post.node.pictures
				},
			})
		}
	})
	
	//Tags By Location master
	createPage({
		path: `/tags/location/`,
		component: path.resolve(`./src/components/AllTagsByLocation.js`),
	});
	
	//Individual tags by Locatiom
	Tags.forEach(tag => {
		createPage({
			path: `/tags/location/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/components/TagsByLocation.js`),
			context: {
				tag: tag.fieldValue,
			},
		})
	})

	//Tags by Type master
	createPage({
		path: `/tags/type/`,
		component: path.resolve(`./src/components/AllTagsByType.js`),
	});
	
	//Individual tags by type
	TagTypes.forEach(type => {
		createPage({
			path: `/tags/type/${_.kebabCase(type.fieldValue)}/`,
			component: path.resolve(`./src/components/TagsByType.js`),
			context: {
				type: type.fieldValue,
			},
		})
	})
}

