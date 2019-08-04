import React, { ReactElement, ReactNode } from 'react'

interface PostHeadingProps {
  children?: ReactNode
}

export const PostHeading = ({ children }: PostHeadingProps): ReactElement => {
  return <h1 className="text-3xl">{children}</h1>
}
