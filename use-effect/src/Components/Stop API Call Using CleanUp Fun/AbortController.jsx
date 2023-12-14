import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AbortController() {

    let [ary,setary] = useState([])

    let url = `https://api.github.com/users`

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => 
        {
        // dispatch(requestStarted());
          try {
            // let getData = await fetch(url, { signal: abortController.signal });
            // console.log(getData)
            // getData = await getData.json()

            let { data } = await axios.get(url, { signal });
            console.log(data)
            setary(data)

            // code omitted for brevity
    
            // dispatch(requestSuccessful({ data }));
          }
          catch (e) {
            // dispatch(requestFailed({ error: e.message }));
          }
        };
    
        fetchData();
    
        return () => {
          abortController.abort();
        };
      }, [url]);



    //   let changeFun=({target:{name,value}})=>{
    //     console.log(value)
    
    //   }
    //   let subFun=()=>{
    
    //   }


  return (
    <div>
    {/* <input type="text" name="inp" onChange={changeFun} placeholder='Search' />
    <button onClick={subFun}>Submit</button> */}
    {/* <input type="text" name="inp" placeholder='Search' />
    <button >Submit</button> */}

{
                ary.map(({id,avatar_url})=>{
                    return <img key={id} src={avatar_url} alt="" width={"200px"} margin={"200px"}/>
                })
            }
  </div>
  )
}

export default AbortController
