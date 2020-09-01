const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const nodeInternalType = node.internal.type

  if (nodeInternalType === "Mdx") {
    const { createNodeField } = actions
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    {
      allWpPost {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { createPage } = actions

  const allEdges = results.data.allWpPost.edges;
  const podcastEdges = allEdges;

  podcastEdges.forEach((edge, index) => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/style/templates/apiResultTemplate.js"),
      context: {
        slug: edge.node.slug,
        id: edge.node.id
      },
    })
  })
}
