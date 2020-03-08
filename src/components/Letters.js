import React ,{ Component } from 'react';
import Letter from './Letter';
// import './Letters.css';

class Letters extends Component {
    render() {
        
    let letters = this.props.letters
        return (
            <div className='letters'>

                {Object.keys(letters).map((letter) => <Letter className={letters[letter]} letter={letter} />)}
            
            </div>
        );
    }
}
export default Letters;
