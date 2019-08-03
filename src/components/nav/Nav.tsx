import { Link } from 'gatsby'
import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
  locale: string
}

const Nav = ({ locale }: Props): ReactElement => {
  const [localeText, setLocaleText] = useState('')
  useEffect((): void => setLocaleText(locale))
  return (
    <nav className="sticky top-0 pt-4 px-4 flex justify-end">
      <Link className="uppercase" to={locale === 'en' ? '/de' : '/'}>
        {localeText}
      </Link>
    </nav>
  )
}

export default Nav
