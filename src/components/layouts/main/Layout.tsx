import React, { ReactElement, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import '../../../style/main.scss'
import Nav from '../../nav/Nav'
import Footer from '../../footer/Footer'
import { PostHeading, PostParagraph } from '../../mdx/PostComponents'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): ReactElement => {
  return (
    <MDXProvider
      components={{
        // Map HTML element tag to React component
        h1: (props: { children?: ReactNode }): ReactElement => <PostHeading h1 bold {...props} />,
        h2: (props: { children?: ReactNode }): ReactElement => <PostHeading h2 {...props} />,
        h3: (props: { children?: ReactNode }): ReactElement => <PostHeading h3 bold {...props} />,
        h4: (props: { children?: ReactNode }): ReactElement => <PostHeading h4 {...props} />,
        p: PostParagraph,
        ul: (props: { children?: ReactNode }): ReactElement => <ul {...props} className="list-inside list-square" />,
        ol: (props: { children?: ReactNode }): ReactElement => (
          <ol {...props} className="list-inside list-leading-zero" />
        ),
        a: (props: { children?: ReactNode }): ReactElement => (
          <a {...props} target="_blank" rel="noopener noreferrer" className="text-indigo-800 hover:underline"></a>
        ),
        img: (props: { children?: ReactNode }): ReactElement => (
          <img
            {...props}
            className=""
            // loading="lazy"
          />
        ),
        // h2: DesignSystem.H2,
        // h3: DesignSystem.H3,
        // Or define component inline
      }}
    >
      <Nav locale={locale} />
      <main className="min-h-screen h-full py-24">{children}</main>
      <Footer />
    </MDXProvider>
  )
}

export default Layout
