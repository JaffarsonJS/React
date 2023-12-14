import React from 'react'
import { useState } from 'react'
import BackgroundColorChange from './BackgroundColorChange'

function Background() 
{
    let [isBool,setisBool] = useState(true)

    function toggleFun(){
        setisBool(!isBool)
    }

  return (
    <div>
      {isBool && 
      <BackgroundColorChange/>}
      <button onClick={toggleFun}>{isBool?"Hide":"Show"}</button>
    </div>
  )
}

export default Background