import React, { useState } from "react";
import { useStore } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

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

  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
        <button onClick={() => updateNote(id, notebody)}>save</button>
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
