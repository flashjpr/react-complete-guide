import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Alex', age: 24},
      {name: 'Larisa', age: 24},
    ]
  };

  switchNameHandler = () => {
    // console.log('Clicked')
    this.setState({
      persons: [
        {name: 'Alexandru', age: 29},
        {name: 'Larisa', age: 21},
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
        >Favourite food: sushi</Person>
      </div>
    );
  }
}

export default App;
