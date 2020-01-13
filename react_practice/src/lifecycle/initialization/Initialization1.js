import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Initialization1 extends Component {
    
    constructor(props){
        super(props); //calling parent i.e React.Component props
        console.log(props)
        /**
            state initialization
         */

         console.log("Constructor")
    }


    render() {
        console.log("Render Method")
        return (
            <div>
            <p>Initialization : </p>
                    <br/>
            </div>
        )
    }
}
