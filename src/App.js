import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numberwang from './numberwang';

function Welcome(props) {
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React, {props.name}</h2>
    </div>
  );
}
function Intro(props) {
  return (
    <p className="App-intro">
      {props.message}
    </p>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Aaron"/>
        <Intro message="Welcome to Numberwang! Aaron to play first."/>
        <Numberwang />
      </div>
    );
  }
}

export default App;
