import React, { memo } from 'react'

function Child() {

    console.log("Child 1 rendering")

  return (  
    <div>
        
    </div>
  )
}

export default memo(Child)