import React, { useState } from "react";
import ScrollableList from "./ReactScrollableList";
import DB from "../db.json";
import sample from "lodash/sample";

const WORD_BARREL_HEIGHT = 30;
const WORD_BARREL_ITEMS = 50;

function WordBarrelNPM({ type, selectId, selectedWords, setSelectedWords }) {
  const [filter, setFilter] = useState("");
  const [pickedWord, setPickedWord] = useState(sample(DB[type]));

  const getWords = () => {
    if (type === "") return [];
    return DB[type].filter((w) =>
      w.content.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleWordPick = (word) => {
    setPickedWord(word);
    setSelectedWords({ ...selectedWords, [selectId]: word.content });
  };

  const showWordsList = () => {
    const words = getWords();
    if (words.length === 0)
      return (
        <div className="react-scrollable-list">
          <div className="react-scrollable-list-item">Nothing to show!</div>
        </div>
      );
    return (
      <ScrollableList
        listItems={words}
        heightOfItem={WORD_BARREL_HEIGHT}
        maxItemsToRender={WORD_BARREL_ITEMS}
        onItemClick={handleWordPick}
        selectedId={pickedWord.id}
      />
    );
  };

  const onFilterChange = (e) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value))
      setFilter(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form action="">
        <input
          className="form-control mb-2"
          onChange={onFilterChange}
          placeholder="Filter"
          value={filter}
        />
      </form>
      {showWordsList()}
      <h3>{pickedWord.content}</h3>
    </div>
  );
}

export default WordBarrelNPM;
