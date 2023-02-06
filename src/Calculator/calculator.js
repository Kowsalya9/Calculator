import React, { useState } from 'react';

import Keypad from './keypad';

import './cal.css';
import '../../src/color.css';
// import './style.css';

const Calculator = () => {
    const [input, setInput] = useState('')

    const handleClick = (value) => {
        setInput(input + value)
    }
    
    const handleEqual = () => {
        setInput(eval(input).toString())
    }

    const handleClear = () => {
        setInput("")
    }

    const handleCancel = () => {
        if(input === '') {
            return
        }
        const value = input.slice(0, -1)
        setInput(value)
    }

    return (
        <div className='calculator'>
            <input type='text' value={input} readOnly className='display' placeholder='0' />
            <Keypad handleClick={handleClick}
               handleEqual={handleEqual}
               handleClear={handleClear}
               handleCancel={handleCancel} />
        </div>
    )
}

export default Calculator;