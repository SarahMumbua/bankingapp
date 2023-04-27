import React, { useState } from 'react';

const TransactionTable = ({ transactions, setTransactions }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    };

    const handleAmountChange = event => {
        setAmount(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newTransaction = {
            date,
            description,
            category,
            amount
        };
        fetch('http://localhost:3001/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTransaction)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add transaction');
                }
                setDate('');
                setDescription('');
                setCategory('');
                setAmount('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDelete = id => {
        fetch(`http://localhost:3001/transactions/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete transaction');
                }
                setTransactions(transactions.filter(transaction => transaction.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    };

    const filteredTransactions = transactions.filter(transaction => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            transaction.description.toLowerCase().includes(searchTermLower) ||
            transaction.category.toLowerCase().includes(searchTermLower)
        );
    });

    return (
        <div className='container'>
            <div className="mb-3 d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="Search transactions"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control me-2"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-sm-2">
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            type="text"
                            placeholder="Amount"
                            value={amount}
                            onChange={handleAmountChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2 d-grid">
                        <button type="submit" className="btn btn-primary">
                            Add Transaction
                        </button>
                    </div>
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
                    {filteredTransactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td>
                                <button className ="btn btn-danger" onClick={() => handleDelete(transaction.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
