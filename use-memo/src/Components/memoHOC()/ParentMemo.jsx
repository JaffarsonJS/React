import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function ParentMemo() {
    let [count1,setcount1] = useState(0)

    let updCount =()=>{
        setcount1(count1+1)
    }
    let decCount =()=>{
        setcount1(count1-1)
    }

    console.log("Parent Rendering")

  return (
    <div>
      <h1>Count : {count1}</h1>
      <button onClick={updCount}>Add</button>
      <button onClick={decCount}>Sub</button>
      <ChildOne/>
      <ChildTwo/>
    </div>
  )
}

export default ParentMemo