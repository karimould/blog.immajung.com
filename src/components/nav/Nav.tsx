import { Link } from 'gatsby'
import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
  locale: string
}

const Nav = ({ locale }: Props): ReactElement => {
  const [localeText, setLocaleText] = useState('')
  useEffect((): void => setLocaleText(locale))

  return (
    <nav className="sticky top-0 ">
      <div className="container pt-4 px-4 xl:px-0 flex justify-end">
        <Link
          className="uppercase border-b border-white transition-all hover:border-black"
          to={locale === 'en' ? '/' : '/de'}
        >
          home
        </Link>
        <Link
          className="ml-4 uppercase border-b border-white transition-all hover:border-black"
          to={locale === 'en' ? '/de' : '/'}
        >
          {localeText}
        </Link>
      </div>
    </nav>
  )
}

export default Nav
