import React, { useState } from "react";
import { useStore } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import { IconButton, Tooltip } from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";

function Body({ fetchData }) {
  const [notebody, setNotebody] = useState("no result");
  const [id, setId] = useState();
  const store = useStore();

  store.subscribe(() => {
    setNotebody(store.getState().text || "no result");
    setId(store.getState().id);
  });

  const updateNote = async (id, text) => {
    await axios.patch(`/notes/${id}`, { body: text });
    await fetchData();
  };

  const deleteNote = async (id) => {
    await axios.delete(`notes/${id}`);
    await fetchData();
  };

  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <Tooltip title="Delete" placement="top">
          <IconButton aria-label="delete" onClick={() => deleteNote(id)}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Save" placement="top">
          <IconButton onClick={() => updateNote(id, notebody)}>
            <Save />
          </IconButton>
        </Tooltip>
      </div>
      <div id="note-body">
        <textarea
          type="text"
          id="edit-area"
          value={notebody}
          onChange={(e) => {
            setNotebody(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Body;
