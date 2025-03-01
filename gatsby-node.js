const path = require("path");
const readingTime = require("reading-time");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: "timeToRead",
      value: readingTime(node.body)
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`#graphql
    type Mdx implements Node {
      timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
    }
  `)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath 
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: `${path.resolve('./src/templates/blogpost.jsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
