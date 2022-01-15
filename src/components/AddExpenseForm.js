import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuid4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuid4(),
      name,
      cost: parseInt(cost),
    };
    dispatch({ type: "ADD_EXPENSE", payload: expense });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
            className="form-control"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            required
            className="form-control"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
