import React, { Fragment } from 'react';
import './App.css';
import CounterClass from './components/CounterClass'
import FunctionCouter from './components/CounterFunction'
import IntervalFunctionCounter from './components/IntervalFunctionCounter'

function App() {
  return (
    <Fragment>
      <CounterClass/>
      <FunctionCouter/>
      <IntervalFunctionCounter/>
   </Fragment>
  )
}

export default App;
