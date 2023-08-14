import React,{useState} from "react";
import "./NewExpense.css";
import "./ExpenseForm.css";
const ExpenseForm =()=>{
    const [EnteredTitle, setEnteredTitle]=useState("");
    const [EnteredAmount, setEnteredAmount]=useState("");
    const [EnteredDate, setEnteredDate]=useState("")
    // const [userInput , setUserInput]=useState({
    //      enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
let titleChangeHandler =(event)=>{
    setEnteredTitle(event.target.value);
// setUserInput({
//    enteredTitle:event.target.value,
//    ...userInput
// })
}
let amountChangeHandler =(event)=>{
    setEnteredAmount(event.target.value);
//     setUserInput({
//         enteredAmount:event.target.value,
//         ...userInput
//  setUserInput((prevState)=>{
//  return {...prevState,enteredTitle:event.target.value}
//  })
// })
};
let dateChangeHandler =(event)=>{
    setEnteredDate(event.target.value);
//     setUserInput({
//         enteredDate:event.target.value,
//         ...userInput
// })
 }
return(
<div>
<form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label> 
            <input type = "text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label> 
            <input type = "number" min=".01" step='.01' onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label> 
            <input type = "Date" min="1-1-2022" step='1-1-2023' onChange={dateChangeHandler}/>
        </div>
    </div>
</form>
<div className="new-expense__actions">
    <button type="submit">AddExpense</button>
</div>
</div>
);
}

export default ExpenseForm;