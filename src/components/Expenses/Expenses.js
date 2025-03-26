import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2025');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('Selected Year is ' + selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id}/>
        ))}
        </Card>
    )
}

export default Expenses