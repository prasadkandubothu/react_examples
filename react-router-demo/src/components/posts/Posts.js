import React, { PureComponent } from 'react'

export default class Posts extends PureComponent {

    state = {
        posts : []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>  res.json())
        .then(post => this.setState({posts : post}))
        
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
               
                {this.state.posts.map(post => <div>{post.title}</div>)}
            </div>
        )
    }
}
