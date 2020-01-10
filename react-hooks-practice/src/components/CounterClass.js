import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0         
        }
    }
    
    counterHandler = () => {
        this.setState({
                 count : this.state.count +1
        });
    }

    render() {
        return (
            <div>
    <button onClick={this.counterHandler}>Click Me [Class], Clicked {this.state.count} times</button>
            </div>
        )
    }
}
