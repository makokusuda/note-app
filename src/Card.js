import React from "react";

function Card(props) {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </div>
  );
}

export default Card;
