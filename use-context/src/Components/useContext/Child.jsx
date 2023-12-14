import React, { useContext } from 'react'
import { ContextExmp } from './UseContext'

function Child() 
{
  //! 1
  let edata = useContext(ContextExmp)

  return (
    <>
      <h1>{JSON.stringify(edata.data)}</h1>
      <br />
      <h1>{JSON.stringify(edata.sname)}</h1>
      <br />
      <h1>{JSON.stringify(edata.id)}</h1>
      {
        edata.data.map(({id,sname,age})=>{
          return <div key={id}>
          <h1>{id}</h1>
          <h1>{sname}</h1>
          <h1>{age}</h1>
          </div>
        })
      }
    </>
  )
}

export default Child