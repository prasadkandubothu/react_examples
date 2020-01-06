import React, { Fragment } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import './App.css';
import User from './components/users/User';
import Posts from './components/posts/Posts';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Link to="/" style={{paddingRight : '20px'}}>Home</Link>
      <Link to="/users" style={{paddingRight : '20px'}}>Users</Link>
      <Link to="/posts" style={{paddingRight : '20px'}}>Posts</Link>


      <Fragment>
          <Route exact  path="/" render={() =>  <div>Home Page</div>}></Route>
          <Route path="/users" render={() => <User/>}></Route>
          <Route path="/posts" render={() => <Posts/>}></Route>
      </Fragment>

      </BrowserRouter>    
    </Fragment>
  );
}

export default App;
