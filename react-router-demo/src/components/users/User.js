import React, { Component, Fragment } from 'react'

export default class User extends Component {

    

    render() {
        console.log("In User :  "+ this.props.match.url );
        console.log("In User :  "+ this.props.match.params.userId );
        
        return (
            <div>
              Hi
            </div>
        )
    }
}

