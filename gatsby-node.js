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
      allMdx (filter: {frontmatter: {date: {ne: null}}}) {
        edges {
          node {
            fields {
              collection
            }
            frontmatter {
              slug
            }
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

  const allEdges = results.data.allMdx.edges
  const podcastEdges = allEdges.filter(
    edge => edge.node.fields.collection === `podcast`
  )

  podcastEdges.forEach((edge, index) => {
    const previous =
      index === podcastEdges.length - 1 ? null : podcastEdges[index + 1].node
    const next = index === 0 ? null : podcastEdges[index - 1].node

    createPage({
      path: `/${edge.node.frontmatter.slug}`,
      component: path.resolve("./src/style/templates/podcastTemplate.js"),
      context: {
        slug: edge.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}
