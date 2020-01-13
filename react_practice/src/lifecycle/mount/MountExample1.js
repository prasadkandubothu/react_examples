import React, { Component } from 'react'

export default class MountExample1 extends Component {
    
    constructor(props){
        super(props);
        console.log("Constructor")
        this.state = {
            count : 0
        }
        //this.increaseCounter =   this.increaseCounter().bind(this);
    }

    componentWillMount = () => {
     console.log("Component will Mount")
    }

    componentDidMount = () => {
     console.log("Component Did Mount");
     this.increaseCounter();
    }



    increaseCounter = () => {
          setTimeout(() => {
        this.setState({count : 1});    
        console.log("Called")
     }, 2000);
     
    }

    render() {
        console.log("Render")
        return (
            <div>
                Count : {this.state.count}
                <button onClick = {this.increaseCounter}>Increase Count</button>
            </div>
        )
    }
}
