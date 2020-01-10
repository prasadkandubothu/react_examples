import React, { Fragment, createContext } from 'react';
import './App.css';
import Parent from './context/Parent';
import Sibling from './context/Sibling';
import Child from './context/Child';

function App() {
  return (
    <Fragment>
     
      <Parent/>
      <Child/>
      <Sibling/>
    </Fragment>
  );
}

export default App;
