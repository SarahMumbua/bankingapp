import React, { useState } from 'react';

const TransactionTable = ({ transactions }) => {
  const [form, setForm] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // Call an API or add the form data to the table
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-3">
            <input
              type="date"
              className="form-control"
              name="date"
              value={form.date}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              name="category"
              value={form.category}
              onChange={handleFormChange}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              name="amount"
              value={form.amount}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Add Transaction
        </button>
      </form>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
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
};

export default TransactionTable;
