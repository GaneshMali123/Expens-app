import React from "react";
import './NewExpenseForm.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        console.log(enteredData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;