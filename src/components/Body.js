import React from "react";
import classNames from "classnames";
import "../style/App.css";
import { IconButton, Box, Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Body() {
  return (
    <div className="display-box">
      <div className={classNames("box-header", "body-area")}>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </div>
      <p>This is body</p>
    </div>
  );
}

export default Body;
