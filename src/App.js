import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
function App() {
  // Pooleli 7. Komponentide kompositsioon ja failis Card.js
  const DUMMY_EXPENSES = [
    {
      key: 1,
      date: new Date(2025, 10, 12),
      title: 'New Book',
      amount: 30.99
    },
    {
      key: 2,
      date: new Date(2025, 10, 12),
      title: 'New Jeans',
      amount: 99.99
    }
  ]
  

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={DUMMY_EXPENSES} />
    </div>
  );
}

export default App;
