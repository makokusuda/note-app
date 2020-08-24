import React from "react";
import { useDispatch } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();

  const getText = (text, id) => {
    dispatch({ type: "CHOOSE_BODY", text });
    dispatch({ type: "CHOOSE_ID", id });
  };

  let noteTitle = props.body.split(" \n")[0];
  // less than 25 characters
  if (noteTitle.length > 20) {
    noteTitle = noteTitle.slice(0, 20);
  }

  return (
    <div>
      <button
        type="button"
        className="card"
        onClick={() => {
          getText(props.body, props.id);
        }}
      >
        <p id="note-title">{noteTitle}</p>
        <p id="updated-at">{props.updatedAt}</p>
      </button>
    </div>
  );
}

export default Card;
