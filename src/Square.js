import React, { useState } from 'react'

export default function Square() {
    const [squareValue, setSquareValue] = useState('');
    const [squareInput, setInput] = useState('');


    function calculate(){
        setSquareValue(squareInput * squareInput)
    }

    return (
        <div>
            <input data-testid='inp01' value={squareInput} onChange={e => setInput(e.target.value)} />
            <button data-testid="btn01" onClick={calculate}>Click</button>
            <hr />
            <div data-testid='outputdiv'>{squareValue}</div>
        </div>
    )
}
