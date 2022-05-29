import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  function handle() {
    if (value.length > 0) {
      setList(list.concat([value]));
      setValue("");
      setCount(count + 1);
    }
  }
  return (
    <div className="App">
      <header> My ToDo List</header>
      <div className="Container1">
        Task Name
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button id="add" onClick={handle}>
          Add{" "}
        </button>
      </div>
      <div className="Container2">
        {count} Tasks Pending!
        <div className="btnSet">
          <button className="btn">All </button>
          <button className="btn">Incomplete </button>
          <button className="btn">Complete </button>
        </div>
        <button>Clear Completed </button>
      </div>
      {list.map((item) => (
        <li>
          <input type="checkbox" value={item} />
          {item}
          <button className="edit li">edit </button>
          <button className="delete li">delete </button>
        </li>
      ))}
    </div>
  );
}
