import React, { memo } from 'react'

function ChildTwo() {

    console.log("Child Two Rendering")

  return (
    <div>
      
    </div>
  )
}

export default memo(ChildTwo)