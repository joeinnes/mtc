import React from 'react'
import PropTypes from 'prop-types'
import styles from './Meatcoins.module.css'

const Meatcoins = (props) => {
  return (
    <span className={styles.mtc}>{props.mtc} MTC</span>
  )
}

Meatcoins.propTypes = {
  mtc: PropTypes.number,
}

export default Meatcoins