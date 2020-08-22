import React, { useEffect } from "react";
import axios from "axios";
import "../style/App.css";
import List from "./List";
import Body from "./Body";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/notes");
      dispatch({ type: "LOAD_NOTES", notes: data });
      //dispatch(loadNotes(data));
    };
    fetchData();
  });

  return (
    <div id="app">
      <div id="title">
        <h3>Kiroku</h3>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <List />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Body />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
