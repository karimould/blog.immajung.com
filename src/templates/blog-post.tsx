import React, { ReactElement } from 'react'
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

const BlogPost = ({ pageContext: { locale }, data }: BlogpostProps): ReactElement => {
  const {
    mdx: { body },
  } = data
  console.log('TCL: data', data)
  return (
    <Layout locale={locale}>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <div className="container">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
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
