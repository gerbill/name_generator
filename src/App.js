import Field from "./components/Field";
import { useState } from "react";
import MaleFemale from "./components/MaleFemale";

function App() {
  const [isMale, setIsMale] = useState(true);
  const [words, setWords] = useState({});
  console.log(words);

  const showGenderField = () => {
    if (isMale)
      return (
        <Field
          dataType={"male_names"}
          fieldName={"Male Name"}
          isName={true}
          words={words}
          setWords={setWords}
        />
      );
    return (
      <Field
        dataType={"female_names"}
        fieldName={"Female Name"}
        isName={true}
        words={words}
        setWords={setWords}
      />
    );
  };

  return (
    <div className="App">
      <form action="">
        <div className="mb-3">
          <Field
            dataType={"nouns"}
            fieldName={"Noun"}
            isName={false}
            words={words}
            setWords={setWords}
          />
          <Field
            dataType={"adjectives"}
            fieldName={"Adjective"}
            isName={false}
            words={words}
            setWords={setWords}
          />
          <Field
            dataType={"last_names"}
            fieldName={"Last Name"}
            isName={true}
            words={words}
            setWords={setWords}
          />
          <MaleFemale isMale={isMale} setIsMale={setIsMale} />
          <Field
            dataType={"male_names"}
            fieldName={"Male Name"}
            isName={true}
            words={words}
            setWords={setWords}
          />
          <Field
            dataType={"female_names"}
            fieldName={"Female Name"}
            isName={true}
            words={words}
            setWords={setWords}
          />
          {/*{showGenderField()}*/}
        </div>
      </form>
    </div>
  );
}

export default App;
