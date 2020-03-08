import React ,{ Component } from 'react';
// import './Score.css';

class Score extends Component {
    render() {
        return (
          <span>{this.props.score}</span>
        );
      }
}
export default Score;
