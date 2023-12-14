import React, { createContext } from 'react'
import {id,sname,data} from "./data"
import Child from './Child'

//! 1.
export let ContextExmp = createContext()

function UseContext() {
  return (
    <div>
      {/* 2. */}
      <ContextExmp.Provider value={{id,sname,data}}>

          <h1>Hello</h1>
          <Child/>
          
      </ContextExmp.Provider>
    </div>
  )
}

export default UseContext
