import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');


    const titleChangeHandler = (e) => {
        setEnterTitle(e.target.value);
    };
    const amountChangeHandler = (e) => {
        setEnterAmount(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);

        setEnterTitle('');
        setEnterAmount('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type='number' value={enterAmount} onChange={amountChangeHandler} />
                </div>
            </div>
            <div className='new-expense-actions'>
                <button type='submit'>Add</button>
                
                
            </div>
        </form>
    );
}

export default ExpenseForm;