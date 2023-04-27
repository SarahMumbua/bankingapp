import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import Header from './components/Header';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTransactions(data);
      })
      .catch(error => console.error(error));
  }, []);

  console.log('State:', transactions);

  return (
    <div>
      <Header />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
