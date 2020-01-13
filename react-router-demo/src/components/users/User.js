import React, { Component, Fragment } from 'react'

export default class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        console.log("In User all users :  "+ JSON.stringify(this.props.userData));
        console.log("In User :  "+ JSON.stringify(match));
        
        console.log("Length : "+this.props.length)
        return (
            <div>
            
              UserId : {this.props.match.params.userId}
            <br/>
             User Name : {
           this.props.userData.filter(({id}) => {return id === parseInt(match.params.userId)})
           .map(u => { return <b>{u.name}</b>})
           
             }
              
            </div>
        )
    }
}

