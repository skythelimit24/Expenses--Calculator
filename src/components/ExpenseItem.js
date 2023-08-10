import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem({ title,amount ,date}) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}

export default ExpenseItem;