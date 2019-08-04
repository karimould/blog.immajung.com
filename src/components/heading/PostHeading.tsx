import React, { ReactElement, ReactNode } from 'react'

interface PostHeadingProps {
  children?: ReactNode
}

const PostHeading = ({ children }: PostHeadingProps): ReactElement => {
  return <h1 className="text-3xl">{children}</h1>
}

export default PostHeading
