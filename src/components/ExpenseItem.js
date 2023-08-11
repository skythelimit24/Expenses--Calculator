import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card';

function ExpenseItem({ title,amount ,date}) {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
}

export default ExpenseItem;