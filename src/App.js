import { useEffect, useState } from 'react';
import List from './components/List';
import './styles.css';
import { items } from './data';

export default function App() {
  const [leftList, setLeftList] = useState([]);
  const [leftSelected, setLeftSelected] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [rightSelected, setRightSelected] = useState([]);

  useEffect(() => {
    setLeftList(items);
    setRightList([]);
  }, []);

  function leftHandler(selected) {
    setLeftSelected(selected);
  }

  function rightHandler(selected) {
    setRightSelected(selected);
  }

  function moveLeft() {
    setRightList((prev) =>
      prev.filter((value) => !rightSelected.includes(value))
    );
    setLeftList((prev) => {
      const sort = [...prev, ...rightSelected];
      sort.sort();
      return sort;
    });
  }

  function moveRight() {
    setLeftList((prev) =>
      prev.filter((value) => !leftSelected.includes(value))
    );
    setRightList((prev) => {
      const sort = [...prev, ...leftSelected];
      sort.sort();
      return sort;
    });
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
        <List list={leftList} onChange={leftHandler} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button onClick={moveRight}>&gt;</button>
          <button onClick={moveLeft}>&lt;</button>
        </div>
        <List list={rightList} onChange={rightHandler} />
      </div>
    </div>
  );
}
