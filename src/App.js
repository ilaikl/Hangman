import React from 'react';
import { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';


class EndGame extends Component {
  render() {
    if (this.props.wl === 'won')
      return <span>Congrats you won with {this.props.score} points!</span>
    else if (this.props.wl === 'lost')
      return <span>You lost, the word was '{this.props.word}'...</span>
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "SHALOM TIKVA", hint: "GoaT no. 14" },
      score: 100,
      endgame: false,
      wl: ''
    }
  }

  selectLetter = letter => {



    let newScore
    if (this.state.letterStatus[letter])
      return
    if (this.state.solution.word.includes(letter)) {
      newScore = this.state.score + 5
    } else {
      newScore = this.state.score - 20
    }
    let tempState = { ...this.state }
    tempState.letterStatus[letter] = true
    tempState.score = newScore
    let isEndgame = true


    this.state.solution.word.split('').forEach(l => {
      if (l === ' ')
        return
      if (!tempState.letterStatus[l]) isEndgame = false
    })

    if (isEndgame) {
      tempState.endgame = true
      tempState.wl = 'won'
    }

    if (tempState.score <= 0) {
      tempState.endgame = true
      tempState.wl = 'lost'
    }

    this.setState(tempState)
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    if (!this.state.endgame) {
      return (
        <div className='container'>
          <Solution letters={this.state.letterStatus} solution={this.state.solution} />
          <Score score={this.state.score} />
          <Letters selectLetter={this.selectLetter} letters={this.state.letterStatus} />
        </div>
      )
    } else {
      return <EndGame wl={this.state.wl} score={this.state.score} word={this.state.solution.word} />
    }
  }
}
export default App;
