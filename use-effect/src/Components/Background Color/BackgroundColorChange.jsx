import React from 'react'
import { useEffect } from 'react'

export default function BackgroundColorChange() 
{
  // console.log("start")
    useEffect(()=>{

      // console.log("useeffect")

        document.body.style.background = "green"
        
        return ()=>{
            document.body.style.background ="red"
        }
    })
    
    // console.log("end")


  return (
    <div>
      <img width={"200px"} src="https://images.pexels.com/photos/16690873/pexels-photo-16690873/free-photo-of-model-in-a-white-blouse-and-a-black-mini-skirt.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
    </div>
  )
  
  }
  