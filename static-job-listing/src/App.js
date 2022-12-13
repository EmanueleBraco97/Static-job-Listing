import "./App.css";
import JobList from "./components/JobList";
import JobContext from "./context/JobContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <JobContext>
        <Header />
        <JobList />
      </JobContext>
    </div>
  );
}

export default App;
