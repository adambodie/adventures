const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const ContentTemplate = path.resolve("./src/components/Content.js")
	const result = await graphql(`
		{
		allItemJson {
			edges {
				node {
					id
					backgroundImage
					title
					category
					page
					color
					backgroundColor
					completed
					year
					description
					pictures {
						id
						title
					}
				}
			}
		}
	}
`)

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	const Content = result.data.allItemJson.edges
	Content.forEach(post => {
		createPage({
			path: `${post.node.backgroundImage}`,
			component: ContentTemplate,
			context: {
				id: post.node.id,
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
}
