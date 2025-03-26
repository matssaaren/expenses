import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.ExpenseData.title)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.ExpenseData.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.ExpenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
}

export default ExpenseItem