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
const inputChangeHandler=(identifier,value)=>{
    if (identifier === 'title'){
        setEnteredTitle(value)
    }
    else if(identifier ==='Date'){
        setEnteredDate(value)
    }
    else{
        setEnteredAmount(value)
    }
}
return(
<div>
<form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label> 
            <input type = "text" onChange={(event)=>{inputChangeHandler('title',event.target.value)}}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label> 
            <input type = "number" min=".01" step='.01' onChange={(event)=>{inputChangeHandler('amount',event.target.value)}}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label> 
            <input type = "Date" min="1-1-1947" step='1-1-1947' onChange={(event)=>{inputChangeHandler('date',event.target.value)}}/>
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