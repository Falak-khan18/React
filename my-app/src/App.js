import './App.css';
import { useState } from 'react';
import Button from './components/button'; 
 

export default function Counter() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Button onClick={incCount} label="Increment" />
      <Button onClick={decCount} label="Decrement" />
      <Button onClick={resetCount} label="Reset" />
      <div>Count: {count}</div>
    </div>
  );
}
