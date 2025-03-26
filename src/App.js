import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2025, 10, 12),
    title: 'New Book',
    amount: 30.99
  },
  {
    id: 'id2',
    date: new Date(2025, 9, 12),
    title: 'New Jeans',
    amount: 99.99
  },
  {
    id: 'id3',
    date: new Date(2025, 8, 12),
    title: 'New Bag',
    amount: 199.99
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
