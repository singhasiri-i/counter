import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

export default function App() {

  const [count, setCount] = useState(0)

  const handleClickMinus = () => {
    setCount(count-1)
  }

  const handleClickPlus = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1>Test Basic React</h1>
      <div>
        <button onClick={handleClickMinus}>-</button>
        <span>{count}</span>
        <button onClick={handleClickPlus}>+</button>
      </div>
    </div>
  );
}
