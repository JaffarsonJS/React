import React, { useMemo, useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function UseMemoHookExp() {

    let [count1,setcount1] = useState(0)
    let [count2,setcount2] = useState(0)

    let updCount =()=>{
        setcount1(count1+1)
        setcount2(count2+1)
    }
    let decCount =()=>{
        setcount1(count1-1)
        setcount2(count2-1)
    }

    let isEven = useMemo(()=>
    {
        console.log("isEven Running")
        return count1%2===0
    },[count1])

    console.log("Parent Rendering")

  return (
    <div>
      <h1>Count : {count1}</h1>
      <h1>{isEven?"Even":"Odd"}</h1>
      <button onClick={updCount}>Add</button>
      <button onClick={decCount}>Sub</button>

      <ChildOne/>
      <ChildTwo/>
    </div>
  )
}

export default UseMemoHookExp
