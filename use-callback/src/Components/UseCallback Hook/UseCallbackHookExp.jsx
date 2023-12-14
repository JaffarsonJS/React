import React, { useCallback, useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

function UseCallbackHookExp() {
    let [count1,setcount1] = useState(0)
    let [count2,setcount2] = useState(0)
    
    let countFun1=useCallback(()=>{
        setcount1(count1+1)
    },[count1])

    let countFun2=()=>{
        setcount2(count2+1)
    }

    console.log("Parent Rendering")

  return (
    <div>

        <h1 style={{background:"red"}} onClick={countFun1}>
            Count : {count1}
        </h1>
        <h1 style={{background:"green"}} onClick={countFun2}>
            Count : {count2}
        </h1>
       
        <Child count1={count1} countFun1={countFun1} />
        <Child2 count1={count2} countFun1={countFun2} />
    </div>
  )
}
export default UseCallbackHookExp