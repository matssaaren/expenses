import './App.css';
import Expenses from './components/Expenses/Expenses'

function App() {
  // Pooleli 7. Komponentide kompositsioon ja failis Card.js
  const expenses = [
    {
      key: 1,
      date: new Date(2025, 10, 12),
      title: 'New Book',
      price: 30.99
    },
    {
      key: 2,
      date: new Date(2025, 10, 12),
      title: 'New Jeans',
      price: 99.99
    }
  ]
  

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
