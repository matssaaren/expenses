import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'
const Expenses = (props) => {


    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem ExpenseData={expense}/>
        ))}
        </Card>
    )
}

export default Expenses