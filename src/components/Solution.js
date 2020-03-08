import React, { Component } from 'react';
import Letter from './Letter';
// import './Solution.css';

class Solution extends Component {
    render() {
        let hint = this.props.solution.hint
        let sol = this.props.solution.word.split("")
        return (
            <div className='sol'>
                {sol.map((letter) => {
                    if (letter === ' ') {
                        return <Letter className='space' letter=' ' />
                    } else if (this.props.letters[letter]) {
                        return <Letter className='solTrue' letter={letter} />
                    } else {
                        return <Letter className='solFalse' letter='_' />
                    }
                    // this.props.letters[letter] ? <Letter className='solTrue' letter={letter} /> : <Letter className='solFalse' letter='_' />
                }

                )}
                <span> Hint: {hint}</span>
            </div>

        );
    }
}
export default Solution;
