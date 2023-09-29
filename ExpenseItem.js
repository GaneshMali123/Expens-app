import React from 'react';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return (
        <div className='expense-item'>
            <div className='expense-name'>
                <h2>{props.title}</h2>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ExpenseItem;