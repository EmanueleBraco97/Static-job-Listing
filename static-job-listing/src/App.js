import "./App.css";
import Header from "./components/Header/Header";
import data from "../src/data.json";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <Header />
      <Jobs data={data} />
    </div>
  );
}

export default App;
