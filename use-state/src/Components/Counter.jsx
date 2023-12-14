import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0)
    
  function incrByOne(){
    setCount(count++)
  }

  function increBy5(){
    setCount(count+5)
  }

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={incrByOne}>Increment By 1</button>
      <button onClick={increBy5}>5</button>
    </div>
  );
}










