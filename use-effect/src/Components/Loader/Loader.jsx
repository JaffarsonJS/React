import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import LoaderComp from './LoaderComp'
import "../../App.css"

function Loader() {
    let [ary,setary] = useState([])
    let [load,setload] = useState(true)
    let [err,seterr] = useState(false)

    useEffect(()=>{
        // setTimeout(() => {

            gitFunction()
        // }, 1000);

        },[])
        
    async function gitFunction(){
       try
       {
        let fakeApi = await axios.get("https://fakestoreapi.com/products")
        console.log(fakeApi)
        setary(fakeApi.data)
        setload(false)
       }
       catch(err)
       {
        setload(false)
        seterr(true)
       }
    }


        
  return (
    <div>
        {
            load && <LoaderComp/>
        }
        {
            err && <h1>Error</h1>
        }
      {/* <ul>
        <li className='liRemoveMarker'>
            { */}

                {ary.map(({image,id})=>{
                    return <img key={id} src={image} alt="" width={"200px"} />
                })}

            {/* }
        </li>
      </ul> */}
    </div>
  )
}

export default Loader
