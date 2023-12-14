import React from 'react'

function ChildOne() {

    console.log("Child One Rendering")

  return (
    <div>
      
    </div>
  )
}

export default React.memo(ChildOne)
