import React, { Fragment } from 'react';
import './App.css';
import CounterClass from './components/CounterClass'
import FunctionCouter from './components/CounterFunction'
import IntervalFunctionCounter from './components/IntervalFunctionCounter'
import DataFetching from './components/useContext_function/DataFetching';
import UserList from './components/useContext_function/UserList';
import CountriesData from './components/autocomplete/CountriesData'

export const UserContext = React.createContext();



function App() {
  return (
    <Fragment>
      {/* <CounterClass/>
      <FunctionCouter/>
      <IntervalFunctionCounter/> */}
      {/* <DataFetching/> */}
  <UserContext.Provider value={"prasad"}>
      <CountriesData/>
  </UserContext.Provider>
   </Fragment>
  )
}

export default App;
