import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import {useState} from 'react';

const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const [isEditing, setIsEditing] = useState(false);

    const startIsEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler =() => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick = {startIsEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDatahandler} onCancel = {stopEditingHandler} />}
        </div>
    );

}

export default NewExpense