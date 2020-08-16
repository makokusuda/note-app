import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  //const [data, setData] = useState("");
  const [list, setList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/notes");
      console.log(data);
      const dataList = data.map((e) => <p key={e.id}>Note title: {e.title}</p>);
      setList(dataList);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>{list}</div>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
