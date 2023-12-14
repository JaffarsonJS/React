import React from 'react'
import formStyle from "../../CSS/form.module.css"
import { useState } from 'react'
import PopUp from './Popup'
function Form()
{
  let [obj,setObj] = useState({fn:"",ln:"",mob:""})
  let [isBool,setIsBool] = useState(false)
  // let [str,setstr] = useState("")

    function subFun(e){
      e.preventDefault()
      setObj({...obj,[e.target.name]:""})

      setIsBool(!isBool)

      setTimeout(() => {
        setIsBool(isBool)
      }, 3000);

      console.log(e.target.name)
    }

    function updateFun({target:{name,value}})
    {
      setObj({...obj,[name]:value})
      // fn:"ugfeyu"
      // ln:"wfgyub"

      // setObj({...obj,name:value})
    }

  return (
    <div>
      {isBool && <PopUp msg/>}

      <form action="" onSubmit={subFun} className={formStyle.formDiv}>
        <input type="text" placeholder='First Name' name='fn' onChange={updateFun}/>
        <input type="text" placeholder='Last Name' name='ln' onChange={updateFun}/>
        <input type="text" placeholder='Mobile Number' name='mob' onChange={updateFun}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
