import React from "react";
import { IMockFnProps } from "./mockfn.types";

const MockFn = ({ count, decrement, increment }: IMockFnProps) => {
  return (
    <div>
      <h1>Mock Functions</h1>
      <p>{count}</p>
      {increment && <button onClick={increment}>Increment</button>}
      {decrement && <button onClick={decrement}>Decrement</button>}
    </div>
  );
};

export default MockFn;
