import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css'
import { ReactComponent as CowFace } from '../assets/cow-face.svg'

const Header = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.appName}</h1>
      <CowFace onClick={() => props.clickHandler()} className={styles.icon} />
    </header>
  )
}

Header.propTypes = {
  appName: PropTypes.string,
  menuIcon: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Header
