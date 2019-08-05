import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { ReactElement } from 'react'
import Layout from '../components/layouts/main/Layout'
import { Author, PostAuthors } from '../components/mdx/PostComponents'
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
        authors: Author[]
      }
    }
  }
}

const BlogPost = ({ pageContext: { locale }, data }: BlogpostProps): ReactElement => {
  const {
    mdx: { body, frontmatter },
  } = data
  return (
    <Layout locale={locale}>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <div className="container px-4 lg:px-0 flex flex-col lg:flex-row">
        <div className="lg:w-2/12"></div>
        <div className="lg:w-8/12">
          <MDXRenderer pageContext={frontmatter}>{body}</MDXRenderer>
        </div>
        <div className="lg:w-2/12 mb-8">
          <PostAuthors authors={frontmatter.authors} />
        </div>
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
        date
        title
        description
        authors {
          name
          link
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
