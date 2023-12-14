import React, { useRef } from 'react'

function UseRefHookExm() {
    let inpRef = useRef()
    let btnRef = useRef()

    let focusFun = ()=>{
        inpRef.current.focus()
    }

  return (
    <div>
      <input type="text" ref={inpRef} />
      <button ref={btnRef} onClick={focusFun}>Focus</button>
    </div>
  )
}

export default UseRefHookExm
