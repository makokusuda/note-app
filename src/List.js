import React, { useState } from "react";
import { useStore } from "react-redux";

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
        {list.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default List;
