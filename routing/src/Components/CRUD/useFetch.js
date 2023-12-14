import { useEffect, useState } from "react"

function useFetch(url)
{
    let [apiData,setApiData] = useState(null)
    
    let apiGetFun = async()=>{
        let apiData = await fetch(url)
        apiData = await apiData.json()
        setApiData(apiData)
    }

    useEffect(()=>{
        apiGetFun()
    },[])

    // useEffect(()=>{
    //     fetch(url)
    //     .then((resData)=>{
    //         return resData.json()
    //     }).then((data)=>{
    //         // return data
    //         setApiData(data)
    //     })
    // },[])
    
    return [apiData]
}

export {useFetch}