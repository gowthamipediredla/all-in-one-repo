import React, { useState } from "react";
export const StateComp = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    // setCount(count + 5);
    // setCount(count + 5);
    // setCount(count + 5);
    setCount((prev) => prev + 5);
    setCount((prev) => prev + 5);
    setCount((prev) => prev + 5);

    console.log(count);
  };
  return (
    <div>
      <button onClick={incrementHandler}>click</button>
      <div>{count}</div>
    </div>
  );
};
