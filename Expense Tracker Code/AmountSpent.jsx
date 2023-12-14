import React from 'react'

function AmountSpent({amount}) {
  return (
    <div>
      <h3>Spent : ₹{amount ? amount : 0}</h3>
    </div>
  )
}

export default AmountSpent
