import React, { useState } from "react";
import DB from "../db.json";

function WordBarrel({ type, size, initPosition }) {
  const allWords = DB[type];
  const [filter, setFilter] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [position, setPosition] = useState(initPosition);
  let wordsLength = 0;

  const showWords = () => {
    if (!type) {
      return <option>No Word Type Chosen</option>;
    }
    const words = allWords.filter((w) => {
      return w.includes(filter);
    });
    wordsLength = words.length;
    return words.slice(position - size, position + size + 1).map((w) => {
      return (
        <option value={w} key={w} onFocus={() => setPosition(position + 1)}>
          {w}
        </option>
      );
    });
  };

  const handleWheel = (e) => {
    const scrollDown = e.deltaY < 0;
    if (scrollDown && position <= size) return;
    if (!scrollDown && position >= wordsLength - size - 1) return;
    if (scrollDown) {
      setPosition(position - 1);
    } else {
      setPosition(position + 1);
    }
  };

  const handleChange = (e) => {
    setPickedWord(e.target.value);
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
        <select
          className="form-select"
          aria-label="word picker"
          disabled={type === null}
          size={size * 2 - 1}
          style={{ overflow: "hidden" }}
          onChange={handleChange}
          onWheel={handleWheel}
        >
          {showWords()}
        </select>
      </form>
      <h3>{pickedWord}</h3>
    </div>
  );
}

export default WordBarrel;
