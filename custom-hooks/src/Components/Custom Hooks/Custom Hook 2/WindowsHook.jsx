import React from 'react'
import { useWindowResize } from './useWindowResize'

function WindowsHook() {
    const windowsize =useWindowResize()

    console.log(window.innerWidth)
    
  if(windowsize.width<=600){
    return (
        <div>
          <h1>Small screen is detected</h1>
        </div>
      )
  }
}

export default WindowsHook
