import "./App.css";

import Context from "./context/Context";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <Main />
      </Context>
    </div>
  );
}

export default App;
