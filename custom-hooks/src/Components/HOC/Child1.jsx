import React from 'react'
import HOC from './HOC'

function Child1({count,incCount,decCount}) {

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={decCount}>Dec</button>
      <button onClick={incCount}>Inc</button>
    </div>
  )
}
export default HOC(Child1,3)