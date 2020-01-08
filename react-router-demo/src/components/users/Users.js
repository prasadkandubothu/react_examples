import React, { Component, Fragment } from 'react'
import {Link, Route} from 'react-router-dom';
import User from './User'


export default class Users extends Component {

    state = {
        users : []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => {this.setState({users : user})})
    }

    render() {
        const url= this.props.match.url;
        console.log(url);                
        return (
            <Fragment>
                {this.state.users.map(({id, name}) =>                             
                    <Fragment>
                        <Link to={`/users/${id}`}>{name}</Link>
                        <br/>          
                        
                    </Fragment>    
                
            )}
           
            <Route path={`${url}`} render={() => <b>Please select user...!</b>}></Route>      
            <Route path="/users/:userId" render={props => <User {...this.props}/>}></Route> 
            </Fragment>
        )
    }
}
