import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

const Footer = (): ReactElement => {
  return (
    <div className="">
      <div className="container px-6 py-4 xl:px-0 flex justify-end">
        <Link className="uppercase border-b border-white transition-all hover:border-black" to="/imprint">
          Imprint
        </Link>
        <Link className="ml-4 uppercase border-b border-white transition-all hover:border-black" to="/privacy">
          Privacy
        </Link>
      </div>
    </div>
  )
}

export default Footer
