import React from 'react'
import PropTypes from 'prop-types'
import Cloud from './Cloud'

const Clouds = props => {
  let CloudList = []
  for (let i = 0; i < props.count; i++) {
    CloudList.push(
      <Cloud
        transitionTime={Math.random() * 30 + 15}
        scale={Math.random() * 0.5 + 0.3}
        fromTop={Math.random() * 75}
        key={i}
      />
    )
  }
  return CloudList
}

Clouds.propTypes = {
  count: PropTypes.number
}

export default Clouds
