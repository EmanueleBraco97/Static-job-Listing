import "./App.css";
import Header from "./components/Header/Header";
import Data from "../src/Data.js";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Jobs Data={Data} />
    </div>
  );
}

export default App;
