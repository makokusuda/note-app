import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "../style/App.css";
import List from "./List";
import Body from "./Body";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

function App() {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await axios.get("/notes");

    const sortedData = data.sort((a, b) => {
      return a.updated_at < b.updated_at ? 1 : -1;
    });

    const convertDate = sortedData.map((item) => {
      item.updated_at = moment(item.updated_at, "YYYYMMDDhhmm")
        .add(9, "hours")
        .fromNow();
      return item;
    });

    dispatch({ type: "LOAD_NOTES", notes: convertDate });
    dispatch({ type: "CHOOSE_BODY", text: convertDate[0].body });
    dispatch({ type: "CHOOSE_ID", id: convertDate[0].id });
    //dispatch(loadNotes(convertDate));
  };

  const updateSearchKey = (value) => {
    setSearchKey(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="app">
      <div id="app-title">
        <h3>Kiroku</h3>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <List
            fetchData={fetchData}
            searchKey={searchKey}
            updateSearchKey={updateSearchKey}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Body
            fetchData={fetchData}
            searchKey={searchKey}
            updateSearchKey={updateSearchKey}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
