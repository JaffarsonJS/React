import React, { useReducer } from 'react'

function CountExp1() {

  let countReducer=(currentState,action)=>
  {
    console.log(currentState)
    console.log(action)

    if(action==="increment"){
      return currentState+1
    }
    else if(action==="decrement"){
      return currentState-1
    }
    return currentState
  }

  let [count,dispatcher] = useReducer(countReducer,0)

  return (

    <div>
     <h1>Count: {count}</h1> 
     <button onClick={()=>{dispatcher("increment")}}>Inc</button>
     <button onClick={()=>{dispatcher("decrement")}}>Dec</button>
    </div>
  )
}

export default CountExp1
