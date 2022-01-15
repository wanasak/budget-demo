import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  const handleChange = (e) => {
    const result = expenses.filter((expense) => {
      return expense.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredExpenses(result);
  };

  // useEffect(() => {
  //   setFilteredExpenses(expenses);
  // }, [expenses]);

  return (
    <>
      <input
        type="text"
        placeholder="Type to search..."
        onChange={handleChange}
        className="form-control mb-2 mr-sm-2"
      />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
