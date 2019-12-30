import React from 'react';
import './App.css';
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Main from './components/main/main'

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
