import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const [title, changeTitle] = useState(props.title);

    const clickedHandler = () => {
        changeTitle('Updated');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{title}</h2>
            </div>
            <div className="expense-item__price">Rs {props.amount} /-</div>
            <button onClick={clickedHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem