import React from 'react'

function Remaining({amountBudget,amountSpent}) {
  return (
    <div>
      <h3>Remaining : ₹{amountBudget? amountBudget-amountSpent:0}</h3>
    </div>
  )
}

export default Remaining
