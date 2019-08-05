import Img, { FluidObject, FixedObject } from 'gatsby-image'
import React, { ReactElement, ReactNode } from 'react'
interface PostHeadingProps {
  children?: ReactNode
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  bold?: boolean
}

export const PostHeading = ({ h1, h2, h3, h4, bold, children }: PostHeadingProps): ReactElement => {
  const isBold = (): string => {
    return bold ? 'font-bold' : ''
  }

  const baseClasses = 'mb-10 w-10/12 md:w-8/12'

  if (h1) {
    return <h1 className={`text-3xl ${baseClasses} ${isBold()}`}>{children}</h1>
  }
  if (h2) {
    return <h2 className={`text-2xl ${baseClasses} ${isBold()}`}>{children}</h2>
  }
  if (h3) {
    return <h3 className={`text-lg ${baseClasses} ${isBold()}`}>{children}</h3>
  }
  if (h4) {
    return <h4 className={`text-base ${baseClasses} ${isBold()}`}>{children}</h4>
  }
  return <div>You have to pass a heading size!</div>
}

export const PostParagraph = ({ children }: { children?: ReactNode }): ReactElement => {
  return <p className="text-base mb-6 ">{children}</p>
}

export interface Author {
  name: string
  link: string
  image: { childImageSharp: { fixed: FixedObject } }
}

interface PostAuthorProps {
  authors: Author[]
}

export const PostAuthors = ({ authors }: PostAuthorProps): ReactElement => {
  return (
    <div className="flex lg:flex-col justify-center items-center flex-wrap">
      {authors.map(
        ({ name, link, image }, index): ReactElement => (
          <PostAuthor key={index} name={name} link={link} image={image} />
        ),
      )}
    </div>
  )
}

export const PostAuthor = ({
  name,
  link,
  image,
}: {
  name: string
  link: string
  image: { childImageSharp: { fixed: FixedObject } }
}): ReactElement => {
  return (
    <div className="w-1/3 lg:w-full p-4">
      <a className="pointer flex flex-col justify-center items-center" href={link}>
        <span className="">{name}</span>
        {image ? <Img className=" rounded-full" fixed={image.childImageSharp.fixed}></Img> : null}
      </a>
    </div>
  )
}
