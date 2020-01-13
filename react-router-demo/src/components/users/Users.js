import React, { Component, Fragment } from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom';
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
        console.log("Here "+this.state.users)
        const url= this.props.match.url;
        console.log(url);                
        return (
           
            <Fragment>
                {this.state.users.map(({id, name}) =>                             
                    <Fragment key={id}>
                        <Link to={"/users/"+id}>{name}</Link>
                        <br/>          
                    </Fragment>    
                
            )}
           
                 
            {/* <Route path="/users/:userId" render={props => <User {...this.props} users={this.state.users}/>}></Route>  */}
            {/* <Route path="/users/:userId" component = {User}></Route> */}
            <hr/>
            <Route exact path={`${url}`} render={() => <b>Please select user...!</b>}></Route> 
            <Route path="/users/:userId" render ={ (props) => <User {...props} userData={this.state.users} length={this.state.users.length}/> }></Route>
            </Fragment>
        )
    }
}
