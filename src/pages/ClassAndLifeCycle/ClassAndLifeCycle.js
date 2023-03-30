import React, { useState } from 'react'
import LifeCycle from './LifeCycle'

export default function ClassAndLifeCycle() {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Parent button</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            {
                visible && <LifeCycle />
            }

        </div>
    )
}
