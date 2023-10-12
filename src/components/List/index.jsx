import { useEffect, useState } from "react";

export default function List({ list, onChange }) {
  function handle(element, checked) {
    if (onChange !== undefined) {
      onChange(element, checked)
    }
  }

  return (
    <ul
      style={{
        listStyleType: "none",
        padding: 30,
        margin: 0,
        border: "1px solid",
        borderRadius: "10px"
      }}
    >
      {list.map((element, index) => (
        <li key={element.value}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => {handle(element, e.target.checked)}}
              checked={element.checked}
            />
            {element.value}
          </label>
        </li>
      ))}
    </ul>
  );
}
