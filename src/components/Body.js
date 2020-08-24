import React, { useState } from "react";
import { useStore } from "react-redux";
import classNames from "classnames";
import "../style/App.css";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Body() {
  const [notebody, setNotebody] = useState("no result");
  const store = useStore();

  store.subscribe(() => {
    setNotebody(store.getState().text || "no result");
  });

  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </div>
      <div id="note-body">
        <textarea
          type="text"
          id="edit-area"
          value={notebody}
          onChange={(e) => {
            setNotebody(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Body;
