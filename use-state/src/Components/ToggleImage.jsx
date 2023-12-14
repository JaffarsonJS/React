import { useState } from "react";

export default function ToggleImage(){
    const [isBool,setIsBool] = useState(true)

    function ti(){
        return setIsBool(!isBool)
    }

    return (
        <div>{
            isBool && 
            <img src="https://images.pexels.com/photos/18444579/pexels-photo-18444579/free-photo-of-slices-of-apple-and-golden-rings-lying-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={"200px"}/ >}
            <button onClick={ti}>{isBool?"Hide":"Show"}</button>
        </div>
    )
}

// export default function ToggleImage(){
//     const [isBool, setisBool] = useState(false)
    
//     function toggleImage(){
//         setisBool(!isBool)
//     }

//     return (
//         <div>
//             {isBool || 
//             <img src="https://images.pexels.com/photos/18444579/pexels-photo-18444579/free-photo-of-slices-of-apple-and-golden-rings-lying-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={"200px"}/ >}
//             <button onClick={toggleImage}>{isBool?"Show":"Hide"}</button>
//         </div>
//     )
// }