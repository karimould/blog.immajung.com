import React, { ReactElement, ReactNode } from 'react'
import '../../../style/main.scss'
import Nav from '../../nav/Nav'
import Footer from '../../footer/Footer'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): ReactElement => {
  return (
    <>
      <Nav locale={locale} />
      <main className="h-full py-24">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
