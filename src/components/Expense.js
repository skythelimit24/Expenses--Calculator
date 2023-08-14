import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css'
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
function Expense(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
  const expenses = [
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: '43 Rs',
      date: new Date()
    },
    {
      id: 'e2',
      title: "GiftItem",
      amount: '232 Rs',
      date: new Date()
    },
    {
      id: 'e3',
      title: "Toy",
      amount: '1200 Rs',
      date: new Date()
    },
    {
      id: 'e4',
      title: "MobilePhone",
      amount: '15000 Rs',
      date: new Date()
    },
    {
      id: 'e5',
      title: "Health Drink",
      amount: '850 Rs',
      date: new Date()
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} />
    </Card>
  );
}

export default Expense;