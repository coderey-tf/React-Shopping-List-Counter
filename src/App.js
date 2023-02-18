import { useState } from "react";

import plusIcon from "./assets/plus-icon.svg";
import minusIcon from "./assets/minus-icon.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Tahu Sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please enter a value");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAdditionalCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      //jika jumlah index/barang lebih dari 0 dapat dilakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      /*jika jumlah index/barang lebih dari 0 tidak dapat melakukan
      pengurangan dan otomatis akan menghapus index/baran dari list*/
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCount = () => {
    const total = todos.reduce((prev, current) => prev + current.count, 0);

    return total;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <div className="info">
          <div className="info-total">
            <p>{`Total List : ${todos.length}`}</p>
          </div>
          <div className="info-total">
            <p>{`Total Count : ${getTotalCount()}`}</p>
          </div>
          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div>
                  <div
                    key={index}
                    className={`todo ${
                      !(arr.length === index + 1) && "todo-divider"
                    }`}
                  >
                    {todo.title}

                    <div className="todo-icon-wrapper">
                      <div className="todo-count">{todo.count}</div>

                      <button
                        onClick={() => handleSubstractionCount(index)}
                        className="todo-action-button"
                      >
                        <img src={minusIcon} alt="minus icon" />
                      </button>
                      <button
                        onClick={() => handleAdditionalCount(index)}
                        className="todo-action-button"
                      >
                        <img src={plusIcon} alt="plus icon" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}
      </Container>
    </>
  );
}

export default App;
