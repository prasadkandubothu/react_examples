import React from 'react';
import {Header, Footer} from './components/Layout'
import {Grid} from '@material-ui/core'
import './App.css';

function App() {
  return (
    <Grid container>
      <Header/>
      <Footer/>
    </Grid>
  );
}

export default App;
