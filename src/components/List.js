import React, { useState } from "react";
import { useStore, useDispatch } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import Card from "./Card";
import { IconButton, TextField } from "@material-ui/core";
import { Create } from "@material-ui/icons";

function List() {
  const [list, setList] = useState([]);
  const store = useStore();
  const dispatch = useDispatch();

  store.subscribe(() => {
    setList(store.getState().notes);
  });

  const fetchData = async () => {
    const { data } = await axios.get("/notes");
    dispatch({ type: "LOAD_NOTES", notes: data });
    //dispatch(loadNotes(data));
  };

  const addNewNote = () => {
    // add new note
    axios.post("/notes", {
      title: "new title",
      body: " ",
    });
    // reload database
    fetchData();
  };

  return (
    <div className="display-box">
      <div className={classNames("box-header", "list-area")}>
        <div id="left-material">
          <TextField
            label="Search"
            type="search"
            variant="outlined"
            size="small"
            id="search-field"
          />
        </div>
        <div id="right-material">
          <IconButton aria-label="create" onClick={addNewNote}>
            <Create />
          </IconButton>
        </div>
      </div>
      <div>
        {list.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            title={e.title}
            body={e.body}
            updatedAt={e.update_at}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
