import { useEffect, useState } from 'react';
import List from './components/List';
import './styles.css';
import { items } from './data';

const data = items.map((value) => {
  return {
    value: value,
    position: 'left',
    checked: false,
  };
});

export default function App() {
  const [list, setList] = useState(data);

  function selectHandle(element, checked) {
    setList((prev) =>
      prev.map((value) => {
        if (element === value) {
          value.checked = checked;
        }
        return value;
      })
    );
  }

  function move(from, to) {
    setList((prev) =>
      prev.map((elem) => {
        if (elem.checked && elem.position === from) {
          elem.position = to;
          elem.checked = false;
        }
        return elem;
      })
    );
  }

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '1rem',
        }}
      >
        <List
          list={list.filter((value) => value.position === 'left')}
          onChange={selectHandle}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => {
              move('left', 'right');
            }}
          >
            &gt;
          </button>
          <button
            onClick={() => {
              move('right', 'left');
            }}
          >
            &lt;
          </button>
        </div>
        <List
          list={list.filter((value) => value.position !== 'left')}
          onChange={selectHandle}
        />
      </div>
    </div>
  );
}
