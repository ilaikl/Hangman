import React ,{ Component } from 'react';
import './Letter.css';

class Letter extends Component {

  
  selectLetter = () => {
      this.props.selectLetter(this.props.letter)
  }

  render() {
    let letter = this.props.letter
    return (
      <span className={this.props.className+''} onClick={this.selectLetter}>{letter}</span>
    );
  }
}
export default Letter;
