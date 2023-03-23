import React, { useState } from 'react'

export default function Counter({ onCounterChange, defaultValue }) {
    const [value, setValue] = useState(defaultValue);

    function increment() {
        setValue(value + 1)
        onCounterChange(value + 1)
    }

    function decrement() {
        setValue(value - 1)
        onCounterChange(value - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
