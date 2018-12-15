import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactNavbar  from './Components/ReactNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Header1</h1>
        <ReactNavbar />
      </div>
    );
  }
}

export default App;
