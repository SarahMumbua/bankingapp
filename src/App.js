import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';

const App = () => {
  const [transactions, setTransactions] = useState([]);

 useEffect(() => {
  fetch('http://localhost:3000/transactions')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setTransactions(data);
    })
    .catch(error => console.error(error));
}, []);

 
  return (
    
    <div>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
