import React, { useState } from 'react'

export default function Star() {

    // state 
    let [flag, setFlag] = useState(false)

    function change() {
        setFlag(!flag)
    }
    return (
        <div onClick={change}>

            {flag ? <div>&#9733;</div> : <div>&#9734;</div> }

        </div>
    )
}
