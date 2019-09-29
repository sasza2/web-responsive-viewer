import React from 'react'
import PropTypes from 'prop-types'

import './Add.sass'

const Add = ({ addEmptyTab }) => (
  <button type='button' onClick={addEmptyTab} className='tab-add'>
    <span>+</span>
  </button>
)

Add.propTypes = {
  addEmptyTab: PropTypes.func.isRequired,
}

export default Add
