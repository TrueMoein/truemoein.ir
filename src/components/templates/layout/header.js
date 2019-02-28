import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../../../assets/images/MoeinAlizadeh.jpg'

const Header = ({ siteTitle }) => (
  <header>
    <span>Moein Alizadeh</span>
    <Link to="/">
      <img src={logo} alt={siteTitle} />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
