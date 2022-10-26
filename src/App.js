import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
          <Select initType="Adjectives" />
        </div>
        <div className="col-3">
          <Select initType="Nouns" />
        </div>
        <div className="col-3">
          <Select initType="Male Names" />
        </div>
        <div className="col-3">
          <Select initType="Last Names" />
        </div>
      </div>
    </div>
  );
}

export default App;
