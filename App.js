import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [valu, setValu] = useState("");
  const [flag, setFlag] = useState({ f1: 0, f2: 0 });
  const [aic, setAic] = useState(0);
  const [f, setF] = useState(false);

  useEffect(() => {}, [f]);

  const li =
    list.length > 0 &&
    list.map((item) =>
      aic === 0 ||
      (item.chck && aic === 2) ||
      (item.chck === false && aic === 1) ? (
        <li>
          <div className="abc">
            <div>
              <input
                id="items"
                type="checkbox"
                onChange={() => {
                  item.chck = !item.chck;
                  setF(!f);
                }}
                checked={item.chck ? true : false}
              />
            </div>
            <div
              className="xyz"
              style={{
                textDecoration: item.chck ? "line-through" : "none"
              }}
            >
              {item.ky}
            </div>
            <button
              className="edit li"
              onClick={() => {
                setValu(item.ky);
                setFlag({ f1: 1, f2: item.id });
              }}
            >
              edit{" "}
            </button>
            <button
              className="delete li"
              onClick={() =>
                setList(list.filter((item2) => item2.id !== item.id))
              }
            >
              delete{" "}
            </button>
          </div>
        </li>
      ) : (
        ""
      )
    );

  function handle() {
    if (flag.f1 === 1) {
      if (valu.length > 0) {
        setList(
          list.map((item) =>
            item.id === flag.f2
              ? { id: item.id, ky: valu, chck: item.chck }
              : item
          )
        );
      }
      setFlag({ f1: 0, f2: 0 });
    } else {
      if (valu.length > 0) {
        setCount(count + 1);
        const li2 = list.concat({ id: count, ky: valu, chck: false });
        setList(li2);
      }
    }
    setValu("");
  }

  return (
    <div className="App">
      <header> My ToDo List</header>
      <div className="Container1">
        Task Name
        <input
          id="inp"
          value={valu}
          onChange={(e) => {
            setValu(e.target.value);
          }}
        />
        <button id="add" onClick={handle}>
          Add
        </button>
      </div>
      <div className="Container2">
        {list.filter((item) => item.chck !== true).length} Tasks Pending!
        <div className="btnSet">
          <button className="btn" onClick={() => setAic(0)}>
            All{" "}
          </button>
          <button className="btn" onClick={() => setAic(1)}>
            Incomplete{" "}
          </button>
          <button className="btn" onClick={() => setAic(2)}>
            Complete{" "}
          </button>
        </div>
        <button
          onClick={() => setList(list.filter((item) => item.chck !== true))}
        >
          Clear Completed{" "}
        </button>
      </div>
      <div className="list">{li}</div>
    </div>
  );
}
