import React, { createContext } from 'react'
import Child1 from './Child1'
import { data } from './data'

export let ContextExmp = createContext()

// console.log(ContextExmp)

function PropDrilling() {
    let sm = "Something"
  return (
    <div>
      {data.map(({id,sname,age})=>
      {
        return (
        <ContextExmp.Provider key={id} value={{sname,age,sm}}>
            <Child1/>
        </ContextExmp.Provider>
)
      })}
    </div>
  )
}

export default PropDrilling
