import React from 'react'
import PropTypes from 'prop-types'

function Anjian(props) {
  return (
    <div>Anjian</div>
  )
}

Anjian.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number.isRequired
}

export default Anjian
