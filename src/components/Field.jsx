import React, { useEffect, useId, useState } from "react";
import DB from "../db.json";
import sample from "lodash/sample";
import { capitalize } from "lodash/string";

function Field({ dataType, fieldName, isName, words, setWords }) {
  const id = useId();
  const [word, setWord] = useState("");

  const getWord = () => {
    let currentWord = sample(DB[dataType]);
    if (isName) currentWord = capitalize(currentWord);
    setWord(currentWord);
    setWords({ ...words, [dataType]: currentWord });
  };

  const handleSubmitRandom = (e) => {
    e.preventDefault();
    getWord();
  };

  useEffect(() => {
    getWord();
  }, []);

  console.log(`Field ${fieldName} rerender`);
  return (
    <>
      <div className="row mb-2" style={{ display: "none" }}>
        <label htmlFor={id}>{fieldName}</label>
        <div className="col-8">
          <input
            type="text"
            id={id}
            className="form-control"
            defaultValue={word}
          />
        </div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitRandom}
          >
            Random
          </button>
        </div>
      </div>
    </>
  );
}
