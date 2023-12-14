import React from 'react'
import i from './Form.module.css';

function Budgets(props) {
    let budget = 2000;
    let expences = budget-props.cost;
  return (
    <>
      <div className={i.details}>
      <div>
        <h2>Budget</h2>
        <h4>{budget}</h4>
      </div>
      <div>
      <h2>Remaining</h2>
      <h4>{expences}</h4>
      </div>
      <div>
      <h2>Expenses</h2>
      <h4>{props.cost}</h4>
      </div>
  </div>
    </>
  )
}

export default Budgets
