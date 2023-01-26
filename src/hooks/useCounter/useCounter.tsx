import { useState } from "react";
import { IUseCounterProps } from "./useCounter.types";

export const useCounter = ({ initialCounter = 0 }: IUseCounterProps = {}) => {
  const [count, setcount] = useState<number>(initialCounter);

  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);

  return { count, increment, decrement };
};
