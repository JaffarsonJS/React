import React from 'react'
import { ContextExmp } from './PropDrilling'

function Child2({sname}) {
  return (
    <>
      <ContextExmp.Consumer>
        {
            (({sname})=>{
                return <h1>{sname}</h1>
            })
        }
      </ContextExmp.Consumer>
    </>
  )
}

export default Child2
