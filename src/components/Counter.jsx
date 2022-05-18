import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App: {count}</h1>
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
    </div>
  );
};

export { Counter };
