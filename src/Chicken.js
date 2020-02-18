import React from 'react'
import styles from './Chicken.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as ChickenImage } from './assets/chicken.svg'

const Chicken = props => {
  const duration = Math.random() * 15 + 5
  const chickenStyle = {
    animationName: Math.random() > 0.5 ? 'wobble' : 'wobbleReverse',
    animationTimingFunction: 'ease',
    animationDuration: duration + 's',
    animationIterationCount: 'infinite',
    animationDelay: -1 * duration,
    left: Math.random() * 90 + 5 + 'vw',
    bottom: Math.random() * 10 + 15 + 'vh',
    height: props.height + 'vw'
  }
  return <ChickenImage className={styles.chicken} style={chickenStyle} />
}

Chicken.propTypes = {
  height: PropTypes.number
}

export default Chicken
