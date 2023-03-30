import React from 'react'
import { makeCapiltal } from './operations'

export default function Capitalize({ label }) {
    return (
        <span data-testid="spn01">
            {makeCapiltal(label)}</span>
    )
}
