import Expense from './components/Expense';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
let App = () => {
  const addExpenseHandler = (expense) => {
    console.log("in expense.js")
    console.log(expense)
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense />
    </>
  )
}
export default App;
