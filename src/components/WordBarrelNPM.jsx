import React, { useState } from "react";
import ScrollableList from "./ReactScrollableList";
import DB from "../db.json";

function WordBarrelNPM({ type }) {
  const [filter, setFilter] = useState("");
  const [pickedWord, setPickedWord] = useState("");

  const getWords = () => {
    if (type === null) return [];
    return DB[type]
      .filter((w) => w.includes(filter))
      .map((word, index) => {
        return { id: index, content: word };
      });
  };

  const showWordsList = () => {
    const words = getWords();
    if (words.length === 0)
      return <p className="react-scrollable-list">Nothing to show!</p>;
    return (
      <ScrollableList
        listItems={words}
        heightOfItem={30}
        maxItemsToRender={50}
        onItemClick={setPickedWord}
      />
    );
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          className="form-control mb-2"
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter"
        />
      </form>
      {showWordsList()}
      <h3>{pickedWord}</h3>
    </div>
  );
}

export default WordBarrelNPM;
