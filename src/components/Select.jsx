import React, { useState } from "react";
// import WordBarrel from "./WordBarrel";
import WordBarrelNPM from "./WordBarrelNPM";
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
      <WordBarrelNPM type={type} size={11} initPosition={100} />
    </>
  );
}

export default Select;
