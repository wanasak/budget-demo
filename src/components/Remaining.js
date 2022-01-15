import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenes = expenses.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);

  const alertType = totalExpenes > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenes}</span>
    </div>
  );
};

export default Remaining;
