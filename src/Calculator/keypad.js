import React from 'react';

const Keypad = ({handleClick, handleEqual, handleClear, handleCancel}) => {
    
    return (
        <div className='keypad'>
            <button className='fun-keys' onClick={() => handleClear('C')}>C</button>
            <button className='fun-keys' onClick={() => handleClick('%')}>%</button>
            <button className='fun-keys' onClick={() => handleCancel('x')}>x</button>
            <button className='fun-keys' onClick={() => handleClick('/')}>/</button>
            <br />

            <button className='digit-keys' onClick={() => handleClick('7')}>7</button>
            <button className='digit-keys' onClick={() => handleClick('8')}>8</button>
            <button className='digit-keys' onClick={() => handleClick('9')}>9</button>
            <button className='fun-keys'   onClick={() => handleClick('*')}>*</button>
            <br />

            <button className='digit-keys' onClick={() => handleClick('4')}>4</button>
            <button className='digit-keys' onClick={() => handleClick('5')}>5</button>
            <button className='digit-keys' onClick={() => handleClick('6')}>6</button>
            <button className='fun-keys' onClick={() => handleClick('-')}>-</button>
            <br />

            <button className='digit-keys' onClick={() => handleClick('1')}>1</button>
            <button className='digit-keys' onClick={() => handleClick('2')}>2</button>
            <button className='digit-keys' onClick={() => handleClick('3')}>3</button>
            <button className='fun-keys' onClick={() => handleClick('+')}>+</button>
            <br />
            
            <button className='digit-keys' onClick={() => handleClick('00')} >00</button>
            <button className='digit-keys' onClick={() => handleClick('0')}>0</button>
            <button className='fun-keys'   onClick={() => handleClick('.')}>.</button>
            <button className='operator-keys' onClick={() => handleEqual('=')}>=</button>
        </div>
    )
}

export default Keypad;