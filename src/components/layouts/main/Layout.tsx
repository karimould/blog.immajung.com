import React, { ReactElement, ReactNode } from 'react'
import '../../../style/main.scss'
import Nav from '../../nav/Nav'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): ReactElement => {
  return (
    <>
      <Nav locale={locale} />
      <main className=" h-full">{children}</main>
    </>
  )
}

export default Layout
