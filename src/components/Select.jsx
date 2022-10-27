import React, { useState } from "react";
import WordBarrelNPM from "./WordBarrelNPM";
import DB from "../db.json";

function Select({ initType, selectId, selectedWords, setSelectedWords }) {
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
      setSelectedWords({ ...selectedWords, [selectId]: "" });
      selected = "";
    }
    setType(selected);
  };

  return (
    <div className="mb-4">
      <select
        className="form-select mb-2"
        aria-label="Word Type Select"
        value={type}
        onChange={handleChangeType}
      >
        <option value="Select Word Type">Select Word Type</option>
        {getTypeOptions()}
      </select>
      <WordBarrelNPM
        type={type}
        selectId={selectId}
        selectedWords={selectedWords}
        setSelectedWords={setSelectedWords}
      />
    </div>
  );
}

export default Select;
