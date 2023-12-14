import { useState } from "react";

export default function Previous(){
    let [count,setCount] = useState(0)

    function fun(){
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        console.log("Start")

        setCount((previousState)=>{
            console.log(previousState)
            return previousState+1
        })

        console.log("End")


        // setCount((preState)=>{
        //     return preState+1;
        // })
        // setCount((preState)=>{
        //     return preState+1;
        // })
        // setCount((preState)=>{
        //     return preState+1;
        // })

        // for (let index = 0; index < 10; index++) {
        //     setCount((previousState)=>{
        //         return previousState+1
        //     })
            
        // }


    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={fun}>+</button>
        </div>
    )
}