import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Counter() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(0);
  useEffect(() => {
    console.log("a");
  });
  useEffect(() => {
    console.log("b");
  }, []);
  useEffect(() => {
    console.log("c");
  }, [value]);
  return (
    <div>
      <p id="value">{value} {show}</p>
      <button id="increment" onClick={() => setShow(show + 1)}>
        ++
      </button>
      <button id="increment" onClick={() => setValue(value + 1)}>
        +
      </button>
      <button id="decrement" onClick={() => setValue(value - 1)}>
        -
      </button>
      {/* cc */}
    </div>
  );
}

export default Counter;
