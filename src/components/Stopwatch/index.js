// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    initialTimeinSeconds: 0,
  }

  timeTicking = () => {
    this.setState(prevState => ({
      initialTimeinSeconds: prevState.initialTimeinSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timerId = setInterval(this.timeTicking, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  onClickReset = () => {
    this.setState({initialTimeinSeconds: 0})
  }

  renderMinutes = () => {
    const {initialTimeinSeconds} = this.state
    const minutes = Math.floor(initialTimeinSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {initialTimeinSeconds} = this.state
    const seconds = initialTimeinSeconds % 60

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1>Stopwatch</h1>
          <div className="timer-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              Timer
            </div>
            <h1>{time}</h1>
            <div className="button-container">
              <button
                type="button"
                onClick={this.onClickStart}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onClickStop}
                disabled={!isTimerRunning}
              >
                Stop
              </button>
              <button type="button" onClick={this.onClickReset}>
                Reset
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
          alt="stopwatch"
        />
      </div>
    )
  }
}

export default Stopwatch
