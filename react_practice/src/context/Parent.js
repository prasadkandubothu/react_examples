import React, { Component } from 'react'
import {UsernameContext} from './UsernameContext';
import Child from './Child';

class Parent extends Component {

   static contextType = UsernameContext;
    
    render() {
       
        return (
            <div>
                Parent Component :  UserName : {this.context}
                <hr/>
                <Child/>
            </div>
        )
    }
}

//Parent.contextType = UsernameContext;

export default Parent;

