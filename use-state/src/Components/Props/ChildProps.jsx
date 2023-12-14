import React from 'react'

function ChildProps(props) {
  return (
    <div>
      <h1>Child Prop</h1>
      <h1>{props.d}</h1>
    </div>
  )
}

export default ChildProps
