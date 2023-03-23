import React, { useState } from 'react'

export default function Panel({head,body}) {

    // state 
    let [expanded, setExpanded] = useState(false)

    function change(){
        setExpanded(!expanded)
    }

    return (
        <div className='border'>
            <div className='border'>{head} <button onClick={()=>change()}>{expanded ? "-" : "+"}</button></div>
            {expanded == true ? <div className='border'>{body}</div> : <></>}
        </div>
    )
}
