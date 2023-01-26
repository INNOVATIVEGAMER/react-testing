import React, { useState } from "react";

interface Props {}

export const delay: ({ time }: { time: number }) => Promise<any> = ({ time }) =>
  new Promise((res, rej) => setTimeout(res, time));

const Counter = (props: Props) => {
  const [count, setcount] = useState<number>(0);
  const [amount, setamount] = useState<number | undefined>(undefined);
  const [loading, setloading] = useState<boolean>(false);

  const Increment = async () => {
    setloading(true);
    await delay({ time: 800 });
    setcount(count + 1);
    setloading(false);
  };

  const SetCounterAsAmount = async () => {
    setloading(true);
    await delay({ time: 800 });
    if (amount) setcount(amount);
    setloading(false);
  };

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && <h2>{count}</h2>}
      <button onClick={Increment}>Increment</button>
      <input
        name="set"
        type="number"
        id="set"
        onChange={(e) => setamount(Number(e.target.value))}
      />
      <button onClick={SetCounterAsAmount}>Set</button>
    </div>
  );
};

export default Counter;
