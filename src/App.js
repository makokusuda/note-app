import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import List from "./List";
import Body from "./Body";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/notes");
      dispatch({ type: "LOAD_NOTES", notes: data });
      //dispatch(loadNotes(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <List />
      <Body />
    </div>
  );
}

export default App;
