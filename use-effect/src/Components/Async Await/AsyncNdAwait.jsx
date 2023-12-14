import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function AsyncNdAwait() {

    let [api,setApi] = useState([])

    let getDataFun;
    useEffect(()=>{
        getDataFun()

        return ()=>{
          console.log("Nothing")
        }
      },[getDataFun]);

      
    getDataFun= async()=>
    {
        let prom = await fetch("https://api.github.com/users")
        prom = await prom.json()
        console.log(prom)
        setApi(prom)
        
        return ()=> getDataFun();
    }

  return (
    <div>
            {
                api.map(({id,avatar_url})=>{
                    return <img key={id} src={avatar_url} alt="" width={"200px"} margin={"200px"}/>
                })
            }
    </div>
  )
}

export default AsyncNdAwait
