import { useState } from "react";

function useCounter(c){
    let [count,setCount] = useState(0)

    let incCount=()=>{
        setCount(count+c)
    }
    let decCount=()=>{
        setCount(count-c)
    }

    return {count,incCount,decCount}
}

export {useCounter};