/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import Footer from './footer'
import './layout.css'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 300,
    easing: 'easeInOutQuint',
  })
}

const Layout = ({ children }) => {
  return (
    <>
      <div className="content-wrapper mx-auto pt-6 px-6">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
