import Select from "./components/Select";
import { useState } from "react";
import NameGenerator from "./components/NameGenerator";

function App() {
  const [selectedWords, setSelectedWords] = useState({});
  const getSelects = () => {
    const wordTypes = ["Adjectives", "Nouns", "Male Names", "Last Names"];
    return wordTypes.map((wordType, selectId) => {
      return (
        <div key={wordType} className="col-6 col-md-3">
          <Select
            initType={wordType}
            selectId={selectId}
            selectedWords={selectedWords}
            setSelectedWords={setSelectedWords}
          />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="row">{getSelects()}</div>
      <NameGenerator selectedWords={selectedWords} />
    </div>
  );
}

export default App;
