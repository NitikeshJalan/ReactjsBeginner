import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

const Expenses = (props) => {

  const[FilteredYear, setFilteredYear] = useState('2020');

  const FilterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

    return ( 
      <div>
      <ExpensesFilter selected = {FilteredYear} onChangeFilter = {FilterchangeHandler}/>
      <Card className="expenses">
      <ExpenseItem 
      title={props.expenses[0].title} 
      amount={props.expenses[0].amount} 
      date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.expenses[1].title} 
      amount={props.expenses[1].amount} 
      date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.expenses[2].title} 
      amount={props.expenses[2].amount} 
      date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.expenses[3].title} 
      amount={props.expenses[3].amount} 
      date={props.expenses[3].date}
      ></ExpenseItem>
        </Card>
      </div>
    );
}

export default Expenses