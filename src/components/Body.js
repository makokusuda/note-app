import React, { useState } from "react";
import { useStore } from "react-redux";
import classNames from "classnames";
import "../style/App.css";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Body() {
  const [notebody, setNotebody] = useState("default");
  const store = useStore();

  store.subscribe(() => {
    setNotebody(store.getState().text);
  });

  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </div>
      <div id="note-body">
        <p>{notebody}</p>
      </div>
    </div>
  );
}

export default Body;
