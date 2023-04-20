import { useState } from 'react';

export const useCounter = (initialState: number = 0) => {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};
