import React, { Component } from 'react'

export default class Child extends Component {

    

    constructor(props) {
       console.log(props)
        super(props)
    
        this.state = {
             childName : 'ChildName'
        }
    }
    
    sendChildDataToParent(){
       this.props.getChildNameData(this.state.childName);
    }

    render() {
       
        return (
            <div>
                <button onClick={() => this.sendChildDataToParent()}>Show Child data in Parent</button>
                <br/>
                Child Component <br/>
                Form Parent :
                {this.props.parentName}
            </div>
        )
    }
}
