import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function StopAPICall() {

  let [movie,setMovies] = useState([])

    useEffect(() => 
    {
        const controller = new AbortController();
        const signal = controller.signal;
        let apiUrl = `http://www.omdbapi.com/?apikey=9f7404c6&s=${movie}`;

        async function movieapi() 
        {
        try 
          {
            let { data: { Search },} = await axios.get(apiUrl, { signal });

            // updating array for maping
            setMovies(Array.isArray(Search) ? Search : []);
            // console.log(movies);
        }
        catch (err) {}
        }
    movieapi();

    // Cleanup function
    return () => controller.abort();
  },[movie]);


  let changeFun=({target:{name,value}})=>{
    console.log(value)

  }
  let subFun=()=>{

  }

  return (
    <div>
      <input type="text" name="inp" onChange={changeFun} placeholder='Search' />
      <button onClick={subFun}>Submit</button>
    </div>
  )
}

export default StopAPICall
