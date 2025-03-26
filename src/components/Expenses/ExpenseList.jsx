import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    
    if(props.expenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found</p>
    }
    return(
        <ul className='expenses-list'>
        {
            props.expenses.length > 0 && props.expenses.map((expense) => {
                return <ExpenseItem date={expense.date} key={expense.id} title={expense.title} amount={expense.amount}/> 
            })
        }
        </ul>
    )
}

export default ExpensesList;