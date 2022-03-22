import logo from "./logo.svg";
import "./App.css";
import writers from "./writers";

function App() {
  // console.log(writers);
  return (
    <div>
      <h1>WRITE PROFILES</h1>

      <div className="container">
        {writers.map((writer) => (
          <div className="card">
            <img
              src={`/images/${writer.avatar}.png`}
              width="300px"
              height="300px"
              alt=""
            />
            <div className="textGroup">
              <p>audre audre_lorde</p>
              <p>audre@email.com</p>
              <p>+233551234438</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
