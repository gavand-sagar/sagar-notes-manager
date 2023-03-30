import React, { Component } from 'react'

export default class Counter extends Component {

    // not so good way
    age = 0;

    constructor(props) {
        super(props);
        this.state = {
            count: 6,
            name: 'sagar',
            input: ''
        }
    }

    Increment = () => {


        // not so good way
        //this.age++;
        //this.forceUpdate()

        this.setState({
            count: this.state.count + 1
        })
    }

    onInputChanged = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.onInputChanged} />
                <button onClick={this.Increment}>+</button>
                <span>{this.state.count}</span>
                <div>{this.age}</div>
                <div>input value -==  {this.state.input}</div>
            </div>
        )
    }
}
