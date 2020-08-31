import React, { useState } from "react";
import { useStore, useDispatch } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import Card from "./Card";
import { IconButton, TextField, Tooltip } from "@material-ui/core";
import { Create } from "@material-ui/icons";

function List(props) {
  const dispatch = useDispatch();

  const [list, setList] = useState([]); // allnotes
  const [searchedList, setSearchedList] = useState([]); //searced list

  const store = useStore();

  store.subscribe(() => {
    setList(store.getState().notes);
  });

  const addNote = async () => {
    props.updateSearchKey("");

    await axios.post("/notes", {
      body: "",
    });
    await props.fetchData();
  };

  const searchNote = (word) => {
    const searchResult = list.filter((e) =>
      e.body.toLowerCase().includes(word.toLowerCase())
    );

    setSearchedList(searchResult);

    if (word === "") {
      props.fetchData();
    } else if (searchResult.length > 0) {
      dispatch({ type: "CHOOSE_BODY", text: searchResult[0].body });
      dispatch({ type: "CHOOSE_ID", id: searchResult[0].id });
    } else {
      dispatch({ type: "CHOOSE_BODY", text: "No result" });
    }
  };

  const displayCards = () => {
    if (props.searchKey === "") {
      return list.map((e) => (
        <Card key={e.id} id={e.id} body={e.body} updatedAt={e.updated_at} />
      ));
    } else {
      return searchedList.map((e) => (
        <Card key={e.id} id={e.id} body={e.body} updatedAt={e.updated_at} />
      ));
    }
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
            value={props.searchKey}
            onChange={(e) => {
              props.updateSearchKey(e.target.value);
              searchNote(e.target.value);
            }}
          />
        </div>
        <div id="right-material">
          <Tooltip title="Create" placement="top">
            <IconButton aria-label="create" onClick={() => addNote()}>
              <Create />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div>{displayCards()}</div>
    </div>
  );
}

export default List;
