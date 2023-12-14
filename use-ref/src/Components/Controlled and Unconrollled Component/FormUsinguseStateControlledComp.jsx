import React, { useState } from 'react'

function FormUsinguseStateControlledComp() {
    let [obj,setObj] = useState({userName:"",pass:""})

    let subFun=(e)=>{
        e.preventDefault()
        console.log(obj)
    }

    let changeFun=({target:{value,name}})=>{
        setObj({...obj,[name]:value})
    }

  return (
    <div>
      <form action="" onSubmit={subFun}>
        <h1>Pure Component</h1>
        <input type="text" name="userName" placeholder='Username' onChange={changeFun} />
        <br />
        <input type="password" name="pass" placeholder='Password' onChange={changeFun}  />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormUsinguseStateControlledComp
