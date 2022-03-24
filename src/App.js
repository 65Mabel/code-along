import { useEffect, useState } from "react";
//import writers from "./writers";
import ProfileCard from "./ProfileCard";

function App() {
  const [data, setData] = useState({
    writers: [],
    loading: false,
  });

  const handleClick = () => {
    setData((prevData) => ({
      ...prevData,
      loading: true,
    }));
    setTimeout(() => {
      const getWriters = async () => {
        const response = await fetch("./writers.json");
        const data = await response.json();
        setData({
          writers: data,
          loading: false,
        });
      };
      getWriters();
    }, 2000);
  };

  useEffect(() => {
    handleClick();
  }, []);

  if (data.loading) {
    return (
      <div>
        <h1>Writer Profile</h1>
        <div className="container">
          <div className="card action">
            <div className="infoText">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Write Profiles</h1>
      {data.writers.length > 0 && (
        <div className="container">
          {data.writers.map((writer) => (
            <ProfileCard writer={writer} key={writer.id} />
          ))}
        </div>
      )}
      {data.writers.length === 0 && (
        <div className="container">
          <div className="card action">
            <div className="infoText">Oooops... no writer profile found.</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
