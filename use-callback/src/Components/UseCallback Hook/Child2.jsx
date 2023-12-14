import React, { memo } from 'react'

function Child2({count1,countFun1}) {
    console.log("Child 2 Rendering")
  return (
    <div>
      {/* <h1>Count : {count1}</h1>
      <button onClick={countFun1}>Inc</button> */}
    </div>
  )
}

export default memo(Child2)