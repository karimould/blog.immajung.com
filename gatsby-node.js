/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const locales = require('./src/constants/locales')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              locale
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
  }
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    //Check if pages has a template key
    const locale = post.node.frontmatter.locale
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    if (post.node.frontmatter.templateKey !== null) {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        // additional data can be passed via context
        context: {
          slug: post.node.fields.slug,
          locale,
          previous,
          next,
        },
      })
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.context.locale) {
    // if locale is already set, don't try to recreate pages again
    return
  }

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default ? page.path : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })
    resolve()
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
