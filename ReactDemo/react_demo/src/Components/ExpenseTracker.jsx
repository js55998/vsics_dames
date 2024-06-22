import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ description: "", amount: "" });

  const addExpense = () => {
    setExpenses([...expenses, expense]);
    setExpense({ description: "", amount: "" });
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        placeholder="Description"
        value={expense.description}
        onChange={(e) =>
          setExpense({ ...expense, description: e.target.value })
        }
      />
      <input
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <button onClick={addExpense}>Add</button>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.description}: ${exp.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
