import React from 'react'
import Child2 from './Child2'
import FinalChild from './FinalChild'

function Child1() {
  return (
    <div>
      <Child2/>
      <FinalChild/>
    </div>
  )
}

export default Child1
