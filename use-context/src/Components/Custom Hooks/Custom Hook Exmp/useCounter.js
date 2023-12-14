import { useState } from "react";

function useCounter(){
    let [count,setCount] = useState(0)

    let incCount=()=>{
        setCount(count+1)
    }
    let decCount=()=>{
        setCount(count-1)
    }

    return {count,incCount,decCount}
}

export {useCounter};