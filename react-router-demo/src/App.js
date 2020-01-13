import React, { Fragment } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import './App.css';
import User from './components/users/User';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Home from './components/home/Home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Link to="/" style={{paddingRight : '20px'}}>Home</Link>
      <Link to="/users" style={{paddingRight : '20px'}}>Users</Link>
      <Link to="/posts/100" style={{paddingRight : '20px'}}>Posts</Link>

    <hr/>
      <Fragment>
          <Route exact  path="/" component={Home}></Route>
          <Route path="/users" render={(props) => <Users {...props}/>}></Route>
          <Route path="/posts/:id" render={(props) => <Posts {...props}/>}></Route>
      </Fragment>


      </BrowserRouter>    
    </Fragment>
  );
}

export default App;
