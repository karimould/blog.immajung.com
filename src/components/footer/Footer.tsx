import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import { RoutingLinks } from '../../constants/routingslinks'

const Footer = (): ReactElement => {
  return (
    <div>
      <div className="container px-6 py-4 xl:px-0 flex justify-end">
        <Link className="uppercase border-b border-white transition-all hover:border-black" to={RoutingLinks.IMPRINT}>
          Imprint
        </Link>
        <Link
          className="ml-4 uppercase border-b border-white transition-all hover:border-black"
          to={RoutingLinks.PRIVACY}
        >
          Privacy
        </Link>
      </div>
    </div>
  )
}

export default Footer
