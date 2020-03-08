import React ,{ Component } from 'react';
// import './Letters.css';

class Letter extends Component {
  render() {
    let letter = this.props.letter
    return (
      <span className={this.props.className+''}>{letter}</span>
    );
  }
}
export default Letter;
