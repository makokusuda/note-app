import React, { useState } from "react";
import { useStore } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import Card from "./Card";
import { IconButton, TextField, Tooltip } from "@material-ui/core";
import { Create } from "@material-ui/icons";

function List({ fetchData }) {
  const [list, setList] = useState([]); // allnotes
  const [searchedList, setSearchedList] = useState([]); //searced list
  const [searchKey, setSearchKey] = useState("");

  const store = useStore();

  store.subscribe(() => {
    setList(store.getState().notes);
  });

  const addNewNote = async () => {
    // add new note
    await axios.post("/notes", {
      body: "new body",
    });
    // reload database
    await fetchData();
  };

  const searchNote = (word) => {
    setSearchedList(
      list.filter((e) => e.body.toLowerCase().includes(word.toLowerCase()))
    );
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
            onChange={(e) => {
              setSearchKey(e.target.value);
              searchNote(e.target.value);
            }}
          />
        </div>
        <div id="right-material">
          <Tooltip title="Create" placement="top">
            <IconButton aria-label="create" onClick={() => addNewNote()}>
              <Create />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div>
        {searchKey === ""
          ? list.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                body={e.body}
                updatedAt={e.updated_at}
              />
            ))
          : searchedList.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                body={e.body}
                updatedAt={e.updated_at}
              />
            ))}
      </div>
    </div>
  );
}

export default List;
