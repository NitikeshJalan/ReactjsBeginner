import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {
    //Multiple States
    const  [enterTitle, setEnteredTitle] = useState('');
    const  [enterAmount, setEnteredAmount] = useState('');
    const  [enterDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,  // copies the previous object
        //     enterTitle:event.target.value  // obverrides the specific parameter
        // })
        // setUserInput((prevstate) => {
        //     return {
        //         ...prevstate,
        //         enterTitle:event.target.value
        //     }
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount:event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate:event.target.value
        // })
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date : new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value = {enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enterDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm

