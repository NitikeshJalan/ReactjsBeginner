import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const[FilteredYear, setFilteredYear] = useState('2020');

  const FilterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpnses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

    return ( 
      <div>
      <Card className="expenses">
      <ExpensesFilter selected = {FilteredYear} onChangeFilter = {FilterchangeHandler}/>
        <ExpensesList items = {filteredExpnses}/>
        </Card>
      </div>
    );
}

export default Expenses