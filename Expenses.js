import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
// import Expenses from './components/expenses/Expenses';


const Expenses = props => {
    console.log(props);
    return (
        <div className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            title={expense.title}
                            price={expense.amount} />
                    )
                )
            }
        </div>
    );
}

export default Expenses;