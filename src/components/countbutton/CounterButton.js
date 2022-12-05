import React, { useState } from "react";

const CounterButton = ({ incrementBy }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + incrementBy);
  };
  return (
    <div>
      <button onClick={handleClick}>+{incrementBy}</button>
      <div>{counter}</div>

      <hr />
    </div>
  );
};

export default CounterButton;
