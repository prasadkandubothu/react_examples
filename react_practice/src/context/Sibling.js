import React, { Component } from 'react'
import { UsernameContext } from './UsernameContext';

export default class Sibling extends Component {

    static contextType = UsernameContext

    render() {
        return (
            <div>
                Sibling Component :  :  UserName : {this.context}
                <hr/>
            </div>
        )
    }
}
