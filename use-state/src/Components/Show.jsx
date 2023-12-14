import { useState } from "react";

export default function Show(){
    const [isBool,setIsBool] = useState(true)

    function hide(){
        return setIsBool(false)
    }
    function show(){
        return setIsBool(true)
    }
    return (
        <div>{isBool &&
            <img src="https://images.pexels.com/photos/18444579/pexels-photo-18444579/free-photo-of-slices-of-apple-and-golden-rings-lying-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={"200px"}/ >}
            <button onClick={hide}>Hide</button>
            <button onClick={show}>Show</button>
        </div>
    )
}


// export default function Show(){
//     const [isBool, setisBool] = useState(false)
    
//     function showImage(){
//         setisBool(true)
//     }
//     function hideImage(){
//         setisBool(false)
//     }

//     return (
//         <div>
//             {isBool || 
//             <img src="https://images.pexels.com/photos/18444579/pexels-photo-18444579/free-photo-of-slices-of-apple-and-golden-rings-lying-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={"200px"}/ >}

//             {/* {!isBool && <img src="https://images.pexels.com/photos/18444579/pexels-photo-18444579/free-photo-of-slices-of-apple-and-golden-rings-lying-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={"200px"}/ >} */}

//             <button onClick={hideImage}>Show</button>
//             <button onClick={showImage}>Hide</button>
//         </div>
//     )
// }