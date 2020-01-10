import React, { Component } from 'react'

export default class Cake extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Number of Cakes Available : 
                <br/>
                <button>Buy a cake</button>
            </div>
        )
    }
}
