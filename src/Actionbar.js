import React from 'react'
import PropTypes from 'prop-types'
import styles from './Actionbar.module.css'
import { ReactComponent as Cheese } from '../assets/cheese.svg'
import { ReactComponent as Meat } from '../assets/meat.svg'
import { ReactComponent as Plant } from '../assets/plant.svg'

const Actionbar = props => {
  return (
    <footer className={styles.footer}>
      <Meat className={styles.button} onClick={props.clickHandler(-1)} />
      <Cheese className={styles.button} onClick={props.clickHandler(-0.5)} />
      <Plant className={styles.button} onClick={props.clickHandler(1)} />
    </footer>
  )
}

Actionbar.propTypes = {
  clickHandler: PropTypes.func
}

export default Actionbar
