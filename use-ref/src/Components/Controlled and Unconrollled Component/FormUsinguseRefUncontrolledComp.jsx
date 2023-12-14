import React, { useRef } from 'react'

//! Impure Component
function FormUsinguseRefUncontrolledComp() {

  let userNameRef = useRef()
  let passRef = useRef()

  let subFun=(e)=>{
    e.preventDefault()
    let u = userNameRef.current.value
    let p = passRef.current.value
    console.log(u,p)
    console.log({u,p})
  }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" onSubmit={subFun}>
        <input type="text" name="" id="" placeholder='Username' ref={userNameRef} />
        <br />
        <input type="password" name="" id="" placeholder='Password' ref={passRef} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default FormUsinguseRefUncontrolledComp