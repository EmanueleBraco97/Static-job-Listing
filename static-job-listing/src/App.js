import "./App.css";

import JobContext from "./context/JobContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <JobContext>
        <Header />
        <Main />
      </JobContext>
    </div>
  );
}

export default App;
