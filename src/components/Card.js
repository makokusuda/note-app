import React from "react";

function Card(props) {
  return (
    <div className="card">
      <p>id: {props.id}</p>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </div>
  );
}

export default Card;
