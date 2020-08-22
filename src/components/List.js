import React, { useState } from "react";
import { useStore } from "react-redux";
import classNames from "classnames";
import "../style/App.css";
import Card from "./Card";
import { IconButton, TextField } from "@material-ui/core";
import { Create } from "@material-ui/icons";

function List() {
  const [list, setList] = useState([]);
  const store = useStore();

  store.subscribe(() => {
    setList(store.getState().notes);
  });

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
          <IconButton aria-label="create">
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
