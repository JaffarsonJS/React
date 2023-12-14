import React from 'react'
import ChildProps from './ChildProps'

function ParentProp() {
    let data = "uyf"
  return (
    <div>
      <h1>Parent Props</h1>

      <ChildProps d={data}/>
    </div>
  )
}

export default ParentProp
