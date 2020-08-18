import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Card() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <p>This is Card</p>
    </div>
  );
}

export default Card;
