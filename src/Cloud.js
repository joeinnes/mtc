import React from 'react'
import PropTypes from 'prop-types'
import styles from './Cloud.module.css'

const Cloud = props => {
  const startPoint = -1 * (Math.random() * props.transitionTime)
  const cloudStyle = {
    animationName: 'animateCloud',
    animationDelay: startPoint + 's',
    animationDuration: props.transitionTime + 's',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transform: `scale(${props.scale})`,
    top: props.fromTop + 'vh'
  }
  return <div className={styles.cloud} style={cloudStyle} />
}

Cloud.propTypes = {
  transitionTime: PropTypes.number,
  scale: PropTypes.number,
  fromTop: PropTypes.number
}

export default Cloud
