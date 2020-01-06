import React, { Component } from 'react'

export default class User extends Component {

    state = {
        users : []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => {this.setState({users : user})})
    }

    render() {
        return (
            <div>
               {this.state.users.map(user => <div>{user.name}</div>)}
            </div>
        )
    }
}
