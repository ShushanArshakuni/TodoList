import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setTodoList((prev) => [
      ...prev,
      { title: inputValue, id: Math.random(), status: "done" },
    ]);
    console.log(todoList);
  };

  const handleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="container">
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAdd}>Add</button>

        <div className="list">
          {todoList.map((item) => (
            <div key={item.id}>
              {item.title}

              <button
                onClick={handleDone}
                className={isDone ? "doneButton" : ""}
              >
                Done
              </button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
