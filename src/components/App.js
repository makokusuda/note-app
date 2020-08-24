import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "../style/App.css";
import List from "./List";
import Body from "./Body";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const [latestNote, setLatestNote] = useState("");
  const [latestId, setLatestID] = useState();

  const fetchData = async () => {
    const { data } = await axios.get("/notes");

    const convertDate = data.map((item) => {
      item.updated_at = moment(item.updated_at, "YYYYMMDDhhmm")
        .add(9, "hours")
        .fromNow();
      return item;
    });

    convertDate.sort((a, b) => {
      return a < b ? 1 : -1;
    });

    setLatestNote(convertDate[0].body);
    setLatestID(convertDate[0].id);

    dispatch({ type: "LOAD_NOTES", notes: convertDate });
    //dispatch(loadNotes(convertDate));
  };

  const getLatestText = (text, id) => {
    dispatch({ type: "CHOOSE_BODY", text });
    dispatch({ type: "CHOOSE_ID", id });
  };

  useEffect(() => {
    // fetch data and display latest note
    fetchData().then(() => {
      getLatestText(latestNote, latestId);
    });
  });

  return (
    <div id="app">
      <div id="app-title">
        <h3>Kiroku</h3>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <List fetchData={fetchData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Body />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
