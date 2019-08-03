import { graphql, Link } from 'gatsby'
import React, { ReactNode } from 'react'
import Layout from '../components/layouts/main/Layout'
import { i18n } from '../constants/i18n'

interface HomepageData {
  fields: {
    slug: string
  }
  frontmatter: {
    pageKey: string
    seo_title: string
    seo_desc: string
    title: string
    text: string
  }
}

interface BlogPosts {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    description: string
    date: string
  }
}

interface IndexProps {
  pageContext: {
    [locale: string]: string
  }
  data: {
    homePageData: HomepageData
    blogPosts: {
      nodes: BlogPosts[]
    }
  }
}

const IndexPage = ({ pageContext: { locale }, data: { homePageData, blogPosts } }: IndexProps): ReactNode => {
  const { title, text } = homePageData.frontmatter
  const { nodes: posts } = blogPosts
  return (
    <Layout locale={locale}>
      <div className="container">
        {/* <h1>title: {title}</h1>
      <p>Content: {text}</p>
      <p>Locale: {locale}</p>
    <h2>{i18n[locale].text}</h2> */}

        {/* <h2 className="border-black">BlogPosts:</h2> */}
        <div className="mt-16 px-6 flex flex-col justify-center items-start">
          {posts.map(
            ({ frontmatter: { title }, fields: { slug } }, index): ReactNode => (
              <Link key={index} to={slug} className="mb-2 uppercase truncate w-full" title="link to blog post">
                {title}
              </Link>
            ),
          )}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: mdx(frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
        title
        text
      }
    }
    blogPosts: allMdx(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" }, locale: { eq: $locale } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`
