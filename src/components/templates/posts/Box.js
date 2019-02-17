import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PostBox = ({ children, title }) => {
  return (
    <Link to={`/${title}`}>
      <div className="post-box">
        <h4>{title}</h4>
        {children}
      </div>
    </Link>
  )
}

PostBox.propTypes = {
  title: PropTypes.string.isRequired,
}
export default PostBox
