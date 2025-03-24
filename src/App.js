import './App.css';
import Expenses from './components/Expenses'

function App() {
  // Pooleli 7. Komponentide kompositsioon ja failis Card.js
  const expenses = [
    {
      date: new Date(2025, 10, 12),
      title: 'New Book',
      price: 30.99
    },
    {
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
