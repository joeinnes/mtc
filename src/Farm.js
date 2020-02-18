import React from 'react'
import PropTypes from 'prop-types'
import Cow from './Cow'
import Chicken from './Chicken'

const Farm = props => {
  let animalsArray = []
  for (let i = 0; i < props.animalCount; i++) {
    if (props.animalCount === 1) {
      animalsArray.push(<Cow height={300 / props.animalCount} key={i} />)
    } else if (i % 3 === 0) {
      animalsArray.push(
        <Chicken height={300 / props.animalCount} key={i + 'a'} />
      )
      animalsArray.push(
        <Chicken height={300 / props.animalCount} key={i + 'b'} />
      )
    } else {
      animalsArray.push(<Cow height={300 / props.animalCount} key={i} />)
    }
  }
  return animalsArray
}

Farm.propTypes = {
  animalCount: PropTypes.number
}

export default Farm
