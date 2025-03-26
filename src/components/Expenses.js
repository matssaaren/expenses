import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from './Card'
const Expenses = (props) => {
    console.log(props.expenses)

    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                key={expense.key}
                title={expense.title}
                price={expense.price}
                date={expense.date}
                />
        ))}
        </Card>
    )
}

export default Expenses