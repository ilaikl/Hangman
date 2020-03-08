import React from 'react';
import { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus : this.generateLetterStatuses(),
      solution: { word: "MISTER SHALOM TIKVA", hint: "GoaT"},
      score: -1
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    letterStatus['M']=true
    return letterStatus
  }

  render() {
    return (
      <div className='container'>
        <Solution letters={this.state.letterStatus} solution={this.state.solution} />
        <Score score={this.state.score} />
        <Letters letters={this.state.letterStatus} />
      </div>
    );
  }
}
export default App;
