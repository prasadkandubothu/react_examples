import React, { Component, useState } from 'react'
import Child from './Child';

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent Name',
             childData : ''
        }

        this.getChildName = this.getChildName.bind(this);
    }
    

    getChildName(cName){
        this.setState({childData : cName})
     
    }

    render() {
        return (
            <div>
                Parent Component <br/>
                Chidren Data : {this.state.childData}
                <br/><br/><br/>
                <hr/>
                <Child parentName = {this.state.parentName} getChildNameData={this.getChildName}/>
            </div>
        )
    }
}
