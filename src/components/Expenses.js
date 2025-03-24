import ExpenseItem from './ExpenseItem';
import './Expenses.css'
const Expenses = (props) => {
    console.log(props.expenses)

    return (
        <div className="expenses">
        {props.expenses.map((expense) => (
            <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
            />
      ))}
    </div>
    )
}

export default Expenses