import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h1>Counter App: <span>{count}</span></h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
  );
};

export { Counter };
