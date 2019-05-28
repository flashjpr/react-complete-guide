import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
    // ^ compiles to bellow:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react App'))
  }
}

export default App;
