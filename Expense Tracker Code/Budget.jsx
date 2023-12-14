import React from 'react'

function Budget({amount}) {
  return (
    <div>
      <h3>Budget : ₹{amount?amount:0}</h3>
    </div>
  )
}

export default Budget
