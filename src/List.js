import React, { useState } from "react";
import { useStore } from "react-redux";
import Card from "./Card";

function List() {
  const [list, setList] = useState([]);

  const store = useStore();

  store.subscribe(() => {
    setList(store.getState().notes);
  });

  return (
    <div>
      <input type="text" placeholder="Search note"></input>
      <button type="button">Add note</button>
      <p>This is list</p>
      <div>
        {list.map((e) => (
          <Card id={e.id} title={e.title} body={e.body} />
        ))}
      </div>
    </div>
  );
}

export default List;
