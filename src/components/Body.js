import React, { useState } from "react";
import { useStore } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import "../style/App.css";
import { IconButton, Tooltip } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Body(props) {
  const [notebody, setNotebody] = useState("");
  const [id, setId] = useState();
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState("");

  const store = useStore();

  store.subscribe(() => {
    setNotebody(store.getState().text || "");
    setId(store.getState().id);
  });

  const deleteNote = async (id) => {
    await axios.delete(`notes/${id}`);
    props.updateSearchKey("");
    await props.fetchData();
  };

  const saveBody = (text) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await axios.patch(`/notes/${id}`, { body: text });
        await props.fetchData();
        await setStatus("Saved");
      }, 1000)
    );
  };

  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <Tooltip title="Delete" placement="top">
          <IconButton
            id="delete-button"
            aria-label="delete"
            onClick={() => deleteNote(id)}
          >
            <Delete />
          </IconButton>
        </Tooltip>

        <p id="isSaved">{status}</p>
      </div>
      <div id="note-body">
        <textarea
          type="text"
          id="edit-area"
          value={notebody}
          onChange={(e) => {
            setNotebody(e.target.value);
            saveBody(e.target.value);
            setStatus("Saving...");
          }}
        />
      </div>
    </div>
  );
}

export default Body;
