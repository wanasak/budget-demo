import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);

  return (
    <div className="alert alert-info">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
