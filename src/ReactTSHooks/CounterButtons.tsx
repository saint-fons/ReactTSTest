import React from "react";
import { useCounter } from "usehooks-ts";

const Counter = () => {
  const { count, setCount, increment, decrement, reset } = useCounter(0);
  const multiplyBy2 = () => setCount((x) => x * 2);

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={multiplyBy2}>Multiply by 2</button>
    </>
  );
};

export default Counter;
