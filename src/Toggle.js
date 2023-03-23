import React, { useState } from 'react'
export default function Toggle() {

    let [label, setLabel] = useState('HTML')
    
    function change(params) {
        if(label == "HTML"){
            setLabel("CSS")
        }else{
            setLabel("HTML")
        }
    }

    return (
        <div>
            <button data-testid='btn01' onClick={() => change()}>Change</button>
            <span data-testid='spn01'>{label}</span>
        </div>
    )
}
