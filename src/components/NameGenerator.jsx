import React, { useState } from "react";
import word_functions from "../word_functions";

function NameGenerator({ selectedWords }) {
  const [selectedFunction, setSelectedFunction] = useState(
    Object.keys(word_functions)[0]
  );
  const words = Object.values(selectedWords).filter((w) => w.length > 0);

  const listFunctionButtons = () => {
    return Object.keys(word_functions).map((wf) => (
      <button
        key={wf}
        type="button"
        className={`btn me-2 ${
          selectedFunction === wf ? "btn-light" : "btn-outline-light"
        }`}
        onClick={() => setSelectedFunction(wf)}
      >
        {wf}
      </button>
    ));
  };

  return (
    <>
      <div className="row">
        <div className="col">{listFunctionButtons()}</div>
      </div>
      <div className="row">
        <div className="col">
          <div className="position-relative mt-5">
            <h1 className="position-absolute top-50 start-50 translate-middle">
              {word_functions[selectedFunction](words)}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NameGenerator;
