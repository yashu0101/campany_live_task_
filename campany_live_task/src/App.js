import logo from "./logo.svg";
import "./App.css";
import StudantForm from "./component/StrudantForm";
import StudantTask from "./component/StudantTask";
import FechingData from "./component/FetchdataTask/FechingData";
import Akash from "./component/aksh/Akash";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <StudantTask /> */}
      {/* <FechingData /> */}
      <Akash />
    </div>
  );
}

export default App;
