import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import NewExpense from "./NewExpense/NewExpense";
let Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "43 Rs",
    date: new Date(),
  },
  {
    id: "e2",
    title: "GiftItem",
    amount: "232 Rs",
    date: new Date(),
  },
  {
    id: "e3",
    title: "Toy",
    amount: "1200 Rs",
    date: new Date(),
  },
  {
    id: "e4",
    title: "MobilePhone",
    amount: "15000 Rs",
    date: new Date(),
  },
  {
    id: "e5",
    title: "Health Drink",
    amount: "850 Rs",
    date: new Date(),
  },
];

let Expense = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const FilteredExpenses = expenses.filter((replicate) => {
    return replicate.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <h3>No Expenses Found ! </h3>;
  if (FilteredExpenses.length > 0) {
    expensesContent = FilteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expense;
