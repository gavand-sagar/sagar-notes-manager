import React, { Component } from 'react'
import { makeCapiltal } from './operations'

export default class CapitalizeWithClass extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <span data-testid="spn01">
                {makeCapiltal(this.props.label)} {makeCapiltal(this.props.label2)}</span>
        )
    }
}
