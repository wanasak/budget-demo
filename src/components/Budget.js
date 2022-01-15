import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = (value) => {
    setIsEditing(false);
    dispatch({ type: "SET_BUDGET", payload: value });
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget budget={budget} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Budget;
