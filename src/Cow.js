import React from 'react'
import styles from './Cow.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as CowImg } from '../assets/cow.svg'

const Cow = props => {
  const duration = Math.random() * 15 + 5
  const cowStyle = {
    animationName: Math.random() > 0.5 ? 'wobble' : 'wobbleReverse',
    animationTimingFunction: 'ease',
    animationDuration: duration + 's',
    animationIterationCount: 'infinite',
    animationDelay: -1 * duration,
    height: props.height + 'vw',
    left: Math.random() * 90 + 5 + 'vw',
    bottom: Math.random() * 10 + 10 + 'vh'
  }

  return (
    <div>
      <CowImg alt="A cow" className={styles.cow} style={cowStyle} />
    </div>
  )
}

Cow.propTypes = {
  height: PropTypes.number
}

export default Cow
