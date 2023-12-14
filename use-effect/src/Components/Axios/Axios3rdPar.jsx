import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function Axios3rdPar() {
    let [ary,setary] = useState([])

    useEffect(()=>{

        //^ Async and Await Function
        // getUser()
        // async function getUser(){
        //     let git = await fetch("https://api.github.com/users")
        //     git = await git.json()
        //     console.log(git)
        //     setary(git)
        // }

        //*Promise
        // let prom = fetch("https://api.github.com/users")
        // prom.then((response)=>{
        //     return response.json()
        // }).then((apiData)=>{
        //     setary(apiData)
        // })

        //! Axios
        axiosFunction()
        async function axiosFunction(){
            // let git = await axios.get("https://jsonplaceholder.typicode.com/photos")
            
            let git = await axios.get("https://fakestoreapi.com/products")
            console.log(git)
            setary(git.data)

            // let {data} = await axios.get("https://api.github.com/users")
            // console.log(data)
            // setary(data)
        }
    },[])

  return (
    <div>
      <ul>
        <li style={{display:"flex"}}>
            
            {/* jsonplaceholder Website */}
            {/* {
                ary.map(({id,url,title})=>{
                    return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <img src={url} alt="" width={"200px"} />
                        <h1>{title}</h1>
                    </div>
                    )
                })
            } */}

            {/* Github */}
            {/* {
                ary.map(({id,avatar_url,login})=>{
                    return (
                    <div>
                        <h1>{id}</h1>
                        <img src={avatar_url} alt="" width={"200px"} />
                        <h1>{login}</h1>
                    </div>
                    )
                })
            } */}

            {
                ary.map(({id,image,title})=>{
                    return (
                    <div>
                        <h1>{id}</h1>
                        <img src={image} alt="" width={"200px"} />
                        <h1>{title}</h1>
                    </div>
                    )
                })
            }
        </li>
      </ul>
    </div>
  )
}

export default Axios3rdPar
