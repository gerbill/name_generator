import React, { useState } from "react";
import WordBarrel from "./WordBarrel";
import DB from "../db.json";

function Select({ initType }) {
  const [type, setType] = useState(initType);

  const getTypeOptions = () => {
    return Object.keys(DB).map((t) => {
      return (
        <option key={t} value={t}>
          {t}
        </option>
      );
    });
  };

  const handleChangeType = (e) => {
    let selected = e.target.value;
    if (selected === "Select Word Type") {
      selected = null;
    }
    setType(selected);
  };

  return (
    <>
      <select
        className="form-select mb-2"
        aria-label="Word Type Select"
        onChange={handleChangeType}
      >
        <option value={null}>Select Word Type</option>
        {getTypeOptions()}
      </select>
      <WordBarrel type={type} size={5} initPosition={5} />
    </>
  );
}

export default Select;
