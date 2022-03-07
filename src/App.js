import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(count - 1)
  }
  function incCount() {
    setCount(count + 1)
  }
  function defaultValue() {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={incCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={defaultValue}>Reset</button>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
