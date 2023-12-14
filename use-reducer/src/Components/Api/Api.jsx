import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import "./loader.css"

let initalState = {
    newProducts:[],
    isLoading: true,
    isError: false
}

let apiReducerFun=((cstate,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS" : return {...cstate,newProducts : action.payload,isLoading:false}
        case "FETCH_ERROR" : return {...cstate,isError: true,isLoading:false}
        default:
    }
    return cstate
})



function Api() {

    let [products,productDispatcher] = useReducer(apiReducerFun,initalState)

    let getData=async()=>{
        try{
          let {data} = await axios.get("https://fakestoreapi.com/products")
        productDispatcher({type:"FETCH_SUCCESS",payload:data})
        }
        catch(err){
          productDispatcher({type:"FETCH_ERROR"})
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      {products.isLoading && <span className="loader"></span>}
      <h1>{products.isError && "Error"}</h1>
      {
        products.newProducts.map(({id,image})=>{
            return <img id={id} src={image} width="200px" alt="" />
        })
      }
    </div>
  )
}

export default Api
