import React, { Component } from 'react'

export default class UpperCase extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>UpperCase - {this.props.value.toUpperCase()}</div>
        )
    }
}
