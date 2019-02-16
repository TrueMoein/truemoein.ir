import React from 'react'
import PropTypes from 'prop-types'

const PostBox = ({ children, title }) => {
  return (
    <div className="post-box">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

PostBox.propTypes = {
  title: PropTypes.string.isRequired,
}
export default PostBox
