import React from 'react'
import '../components/Style.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  )
}

export default ExpenseItem