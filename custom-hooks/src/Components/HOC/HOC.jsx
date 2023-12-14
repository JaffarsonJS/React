import React, { useState } from 'react'

function HOC(OrgCom,count) 
{
    function NewComp()
    {
        let [c,sc] = useState(0)

        let incCount=()=>{
            sc(c+count)
        }
        let decCount=()=>{
            sc(c-count)
        }

        return <OrgCom count={c} incCount={incCount} decCount={decCount}/>
    }

  return NewComp
}

export default HOC
