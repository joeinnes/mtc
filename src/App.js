import React from 'react'
import './App.css'
import Header from './Header'
import Meatcoins from './Meatcoins'
import World from './World'
import Actionbar from './Actionbar'
import Clouds from './Clouds'
import Farm from './Farm'
import AboutOverlay from './AboutOverlay'
import { get, set } from 'idb-keyval'

const vh = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
)

class App extends React.Component {
  state = {
    mtc: 0,
    displayAboutOverlay: false
  }

  toggleAbout = () => {
    this.setState((prevState, props) => {
      return {
        displayAboutOverlay: !prevState.displayAboutOverlay
      }
    })
  }

  updateMTC = val => {
    this.setState((prevState, props) => {
      set('mtc', prevState.mtc + val)
      return {
        mtc: prevState.mtc + val
      }
    })
  }

  componentDidMount() {
    get('mtc').then(val =>
      this.setState({
        mtc: val || 0
      })
    )
  }

  render() {
    return (
      <div className="App">
        <AboutOverlay
          display={this.state.displayAboutOverlay}
          clickHandler={() => this.toggleAbout()}
        />
        <Header appName="Meat Coin" clickHandler={() => this.toggleAbout()} />
        <Meatcoins mtc={this.state.mtc} />
        <Clouds count={1.5 * Math.ceil(vh / 100)} />
        <Farm animalCount={this.state.mtc} />
        <World />
        <Actionbar clickHandler={val => this.updateMTC.bind(this, val)} />
      </div>
    )
  }
}

export default App
