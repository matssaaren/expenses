import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('Selected Year is ' + selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.expenses.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id}/>
        ))}
        </Card>
    )
}

export default Expenses