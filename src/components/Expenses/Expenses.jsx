import { useState } from 'react';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList'
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2025');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('Selected Year is ' + selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList expenses={filteredExpenses} />

        </Card>
    )
}

export default Expenses