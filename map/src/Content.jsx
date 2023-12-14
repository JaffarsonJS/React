import "./App.css"
import { useState } from "react"

export default function Content({style}){
    //* Styling
    let s = {background : 'gold', marginBlock : '10rem', color : 'floralWhite', padding : "5rem", position: 'relative' }
    let h = {background:'grey', borderRadius : "20px", padding : "10px"}

    //! Random content will come
    let arr = ["developer","designer","dinosour"]
    let r = Math.floor(Math.random()*3)
    let random = ()=>{
        return arr[r]
    }

    // function doChange(e){
    //     console.log("hi")
    //     console.log(e)
    //     console.log(e.type)
    //   }

    //*  useState() will return array and here we are destructuring it in two value default will go in the first variable in here 99 will assign into the count variable we're going to set the value that is going to change dynamically in the setCount

    function ranName(){
        return console.log("Gopal")
    }
    const [count, setCount] = useState(100); 
    //& 2. Whenever we write a function inside useState we have to use another function to invoke it otherwise whenever we perform other
    //&    events that will trigger every useState

    const [str, strNName] = useState(()=>ranName())

    // strNName(someRandomName=>someRandomName)

    function incrfun(){
        //* State
        //! 1. when we use useState() we straight away we use that means it will not added up but the last state will do only once, 
        //!    for here it will count only once even if we pass multiple times but when we pass it as a function it is doing well

        //! 3.  
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        setCount(prevIncCount=>prevIncCount + 1)
        setCount(prevIncCount=>prevIncCount + 1)
        setCount(prevIncCount=>prevIncCount + 1)


    }
    function decrfun(){
        // setCount(count-1)
        // setCount(count-1)
        // setCount(count-1)
        setCount((preDecCount)=>preDecCount - 1)
        setCount((preDecCount)=>preDecCount - 1)
        setCount((preDecCount)=>preDecCount - 1)
    }
    return (
        <div className="App">
            <h1 style={s}>
                I am
                <span style={h}>
                     Money
                </span>
            </h1>
            <button className='App ml'>
                 Submit 
            </button>
            <button onClick={decrfun}>-</button>
            <span>{count}</span>
            <button onClick={incrfun}>+</button>

            {/* <h1 style={s}>
                I am <span style={h}> {random()} </span>
                <button className='App ml' onClick={(e)=>{doChange(e)}}>Submit</button>
            </h1> */}
        </div>
    )
}