import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1); // let count=1;

  // Functions
  const decrement = () => {
    if (count <= 0) {
      return;
    }
    console.log("Decrement");
    setCount(count-1);
  };
  const increment = () => {
    console.log("Increment");
    setCount(count+1);
  };

  // UI
  return (
    <div className="container">
      <h1>Counter</h1>

      <div className="counter">
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App
