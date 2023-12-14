import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Promise() {

    let [f,setf] = useState([])

    useEffect(()=>{
        let prom = fetch("https://api.github.com/users")
    // console.log(prom)      
    prom.then((responseObject)=>{
        console.log(responseObject)
        return responseObject.json()
    }).then((apiData)=>{
        console.log(apiData)
        setf(apiData)
    })
    },[])

    

  return (
    <div>
        <ul>
            <li>
                {f.map(({avatar_url})=>{
                    return <img src={avatar_url} alt=''/>
                })}
            </li>
        </ul>

      <img src={f.map(({avatar_url})=>{
        return avatar_url
      })} alt="" />
    </div>
  )
}

export default Promise
