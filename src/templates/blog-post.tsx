import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layouts/main/Layout'
import SEO from '../components/util/seo/Seo'

interface BlogpostProps {
  pageContext: {
    locale: string
  }
  data: {
    mdx: {
      id: string
      body: string
      frontmatter: {
        date: Date
        title: string
        description: string
      }
    }
  }
}

const BlogPost = ({ pageContext: { locale }, data }: BlogpostProps): JSX.Element => {
  const { mdx: post } = data
  return (
    <Layout locale={locale}>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <h1>title: {post.frontmatter.title}</h1>
      <p>description: {post.frontmatter.description}</p>
      <p>date: {post.frontmatter.date}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
