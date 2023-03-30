import React from 'react'
import CapitalizeWithClass from '../../CapitalizeWithClass'
import Counter from './Counter'

export default function ClassBaseDemo() {
    return (
        <div>
            <CapitalizeWithClass label="sagar" label2="gavand"></CapitalizeWithClass>
            <br />
            <CapitalizeWithClass label="tONy" label2="StARk" />

            <hr/>
            this is Counter
            <br/>
            <Counter/>
        </div>
    )
}
