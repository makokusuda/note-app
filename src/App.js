import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import List from "./List";
import Card from "./Card";
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
      <Card />
      <Body />
    </div>
  );
}

export default App;
