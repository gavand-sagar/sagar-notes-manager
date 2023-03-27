import React, { useEffect, useState } from 'react'

export default function Joke({ joke }) {

    const [cracked, setCracked] = useState(false)
    useEffect(() => {
        setCracked(false)
    }, [joke])

    return (
        <div className='joke'>
            <h3 onClick={e => setCracked(true)}>{joke.setup}</h3>
            {
                cracked && <h1 className='punchline'>{joke.punchline}</h1>
            }
        </div>
    )
}
