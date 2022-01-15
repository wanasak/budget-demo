import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center'">
      {name}
      <div>
        <span className="badge badge-pill bg-primary">${cost}</span>
        <TiDelete size="1.5em" onClick={() => handleDelete(id)} />
      </div>
    </li>
  );
};

export default ExpenseItem;
