import React, { Component } from 'react'
import { UsernameContext } from './UsernameContext';

export default class Child extends Component {

    static contextType = UsernameContext;
    render() {
        return (
            <div>
                 Child Component :  UserName : {this.context}
                <hr/>
            </div>
        )
    }
}
