import { useEffect, useState } from "react";

export default function List({ list, onChange }) {
  const [checked, setChecked] = useState([]);

  function handleCheckbox(e) {
    const checked = e.target.checked;
    const element = +e.target.name;
    if (checked) {
      setChecked((prev) => [...prev, element]);
    } else {
      setChecked((prev) => prev.filter((value) => value !== element));
    }
  }

  useEffect(() => {
    if (onChange !== undefined) {
      onChange(checked);
    }
  }, [checked, onChange]);

  useEffect(() => {
    setChecked([]);
  }, [list]);

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
        <li key={element}>
          <label>
            <input
              key={element}
              type="checkbox"
              name={element}
              onChange={handleCheckbox}
            />
            {element}
          </label>
        </li>
      ))}
    </ul>
  );
}
