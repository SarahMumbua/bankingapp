import React, { useState } from 'react';

const TransactionTable = ({ transactions, onAddTransaction }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount
    };
    onAddTransaction(newTransaction);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }

  return (
    <div className="table-responsive mt-5">
      <form onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-md-3">
            <input
              type="date"
              className="form-control mb-2 mr-sm-2"
              placeholder="Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control mb-2 mr-sm-2"
              placeholder="Amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Add Transaction</button>
        </div>
      </form>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
