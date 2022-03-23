import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

import { ProfileCard } from "./ProfileCard";

function App() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const getWriters = async () => {
      const response = await fetch("./writers.json");
      const data = await response.json();
      setWriters(data);
    };
    getWriters();
  }, []);

  return (
    <div>
      <h1>Write Profiles</h1>
      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer} key={writer.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
