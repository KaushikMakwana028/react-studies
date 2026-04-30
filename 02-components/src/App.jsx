import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  // const user = "KAUSHIK";
  // const age = 21;
  return (
    <div>
      {/* <div>
        <h2>Hello, My Name is {user}.</h2>
        <h3>My Age is {age}</h3>
      </div> */}

      {/* <div className="card">
        <h1>Guardian of The Galaxy</h1>
      </div> */}

      {/* <div>
        <h1>{Card ()}</h1>
      </div> */}

      {/* <div className="card">
        <Card />
      </div> */}

      <Card />
      <Navbar />
    </div>
  );
};

export default App;
