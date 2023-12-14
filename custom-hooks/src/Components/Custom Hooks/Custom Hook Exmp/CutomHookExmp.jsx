import React from 'react'
import { useCounter } from './useCounter'

function CutomHookExmp() {
    let {count,incCount,decCount} =  useCounter(5)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incCount}>Inc</button>
      <button onClick={decCount}>Dec</button>
    </div>
  )
}

export default CutomHookExmp
