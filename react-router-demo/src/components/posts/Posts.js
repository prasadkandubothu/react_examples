import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts : []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>  res.json())
        .then(post => this.setState({posts : post}))
        
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <div>{post.title}</div>)}
            </div>
        )
    }
}
