import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (/* props */) => {
  const [personsState, setPersonsState] = useState({
    persons: [{ name: "Alex", age: 24 }, { name: "Larisa", age: 24 }]
  });
  // const [otherState, setOtherState] = useState("some other value");

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [{ name: newName, age: 29 }, { name: "Larisa", age: 21 }]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler("Alexandru")} type="button">
        Switch name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler}
      >
        Favourite food: sushi
      </Person>
    </div>
  );
};

export default App;
