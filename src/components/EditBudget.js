import React, { useState } from "react";

const EditBudget = ({ budget, handleSaveClick }) => {
  const [value, setValue] = useState(budget);

  return (
    <>
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
