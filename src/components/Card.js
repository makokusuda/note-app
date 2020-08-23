import React from "react";
import { useDispatch } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();

  const getText = (text) => {
    dispatch({ type: "CHOOSE_NOTE", text });
  };

  return (
    <div>
      <button
        type="button"
        className="card"
        onClick={() => {
          getText(props.body);
        }}
      >
        <p id="note-title">{props.title}</p>
        <p id="updated-at">{props.updatedAt}</p>
      </button>
    </div>
  );
}

export default Card;
