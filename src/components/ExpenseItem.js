import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  let ClickHandler = () => {
    setTitle('item is updated');
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;