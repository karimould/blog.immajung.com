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

  const baseClasses = 'mb-10 md:px-16 w-10/12 md:w-8/12'

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
  return <p className="text-base mb-6 md:px-16">{children}</p>
}
