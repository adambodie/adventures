const path = require(`path`)
const _ = require(`lodash`)

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const ContentTemplate = path.resolve("./src/components/Content.js")
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
					year
					description
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

	const Content = result.data.allItemJson.edges;
	const Tags = result.data.allItemJson.group;
	
	const postsPerPage = 12;
	const numPages = Math.ceil(Content.length / postsPerPage);
	
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/` : `/${i + 1}`,
			component: path.resolve(`./src/templates/List.js`),
			context: { limit: postsPerPage, skip: i * postsPerPage, numPages, currentPage: i + 1} }
			);
		});

	Content.forEach(post => {
		createPage({
			path: `${post.node.backgroundImage}`,
			component: ContentTemplate,
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
	
	createPage({
		path: `/tags`,
		component: path.resolve(`./src/templates/AllTags.js`),
	});
	
	Tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/templates/Tags.js`),
			context: {
				tag: tag.fieldValue,
			},
		})
	})
}

