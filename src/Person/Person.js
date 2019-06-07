/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const person = props => {
  const { name, age, children, click } = props;
  return (
    <div>
      <p onClick={click}>
        I amm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
