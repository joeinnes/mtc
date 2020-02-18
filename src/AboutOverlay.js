import React from 'react'
import PropTypes from 'prop-types'
import styles from './AboutOverlay.module.css'
import { ReactComponent as Cheese } from './assets/cheese.svg'
import { ReactComponent as Meat } from './assets/meat.svg'
import { ReactComponent as Plant } from './assets/plant.svg'

const AboutOverlay = props => {
  return (
    <div
      className={styles.overlay}
      style={{ display: props.display ? 'block' : 'none' }}
    >
      <h1>Meat Coin</h1>
      <p>
        Meat Coin is a super simple app to help you manage your meat
        consumption. Whether you want to reduce your meat intake for health,
        animal welfare, or environmental reasons, Meat Coin has you covered.
      </p>
      <p>
        Every time you eat a plant-based meal, hit the plant icon
        <Plant className={styles.icon} /> to be credited with a meat coin. If
        you eat a meal with meat, tap <Meat className={styles.icon} /> to reduce
        your Meat Coin balance by 1 MTC. You can also use the{' '}
        <Cheese className={styles.icon} /> button to reduce your MTC balance by
        a half, in case you eat a meal containing dairy.
      </p>
      <p>
        Other rules are up to you - do you want to include breakfast? If you
        have meat and dairy in a single meal, is that 1.5 MTC or just one? Are
        eggs dairy? You decide!
      </p>
      <p>
        No data is ever transmitted to the cloud, all the information is stored
        locally on your device. As a result, there's no logging in, no syncing,
        and no complexity.
      </p>
      <p>
        All the usual caveats apply - use at your own risk, I'm not a doctor,
        and you should check with one before making changes to your diet,
        software is provided as-is, and I'm not promising that it works. If for
        some reason it blows up your device, that's not my fault either.
      </p>
      <p>
        Let me know if something is broken or if you like it!{' '}
        <a href="mailto:mtc@joeinn.es" className={styles.link}>
          mtc@joeinn.es
        </a>
      </p>
      <button
        className={styles.closeoverlay}
        onClick={() => props.clickHandler()}
      >
        Close
      </button>
    </div>
  )
}

AboutOverlay.propTypes = {
  clickHandler: PropTypes.func,
  display: PropTypes.bool
}

export default AboutOverlay
