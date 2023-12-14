import React, { memo } from 'react'

function ChildOne() {

    console.log("Child One Rendering")

  return (
    <div>
      
    </div>
  )
}

export default memo(ChildOne)
