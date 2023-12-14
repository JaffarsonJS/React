import React, { useEffect, useState } from 'react'

function DepArray() {

    let [count,setCount] = useState(0)
    // let [count1,setCount1] = useState(0)
    // let [name,setname] = useState("Hello")

    // function updateFun(){
    //     setCount(count+1)
    //     setCount1(count1+5)
    // }

    // useEffect(()=>{
    //     setname("Jaffarson")
    // },[setname])

    useEffect(()=>{
        // setCount(count+1)
        console.log(count)
    },[count])

    // useEffect(()=>{
    //     setCount1(count1+5)
        
    // },[count1])

  return (
    <div>
        {/* <h1>Name : {name} </h1> */}
      <h1>Count : {count}</h1>
      {/* <h1>Count : {count1}</h1> */}
      {/* <button onClick={updateFun}>Update</button> */}
    </div>
  )
}

export default DepArray
