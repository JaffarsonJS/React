import React from 'react'
import loadStyle from "./loader.module.css"

function LoaderComp() {
  return (
    <div className={loadStyle.loadDiv}> 

      <span className={loadStyle.loader}></span>

      
    </div>
  )
}

export default LoaderComp
