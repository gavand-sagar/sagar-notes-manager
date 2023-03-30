import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // page load
    componentDidMount() {
        console.log("Mounted")
    }

    // on every change
    componentDidUpdate() {
        console.log("Changed", this.state.count)
    }


    componentWillUnmount(){
        console.log("Is Destoying now")
    }

    componentDidCatch(){
        // on any error
    }

    render() {
        return (
            <div>
                <div>LifeCycle </div>
                <div>{this.state.count}</div>
                <button onClick={this.Increment}>Increment</button>
            </div>
        )
    }
}
