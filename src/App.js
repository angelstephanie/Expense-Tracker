import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Water Bottle',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: 'e3',
    title: 'Health Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 5, 12),
  },  
  {
    id: 'e5',
    title: 'Desktop',
    amount: 550,
    date: new Date(2023, 15, 1),
  },
  {
    id: 'e6',
    title: 'Keyboard',
    amount: 150,
    date: new Date(2023, 3, 2),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
