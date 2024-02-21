import { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputEditChange = (e) => {
    setInputEditValue(e.target.value);
  };

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState, inputValue]);
    setInputValue("");
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1); //at  possition index remove 1 item.
      return newTasks;
    });
  };

  const handleEditTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1, inputEditValue);
      // setInputEditValue("");
      return newTasks;
    });
  };

  return (
    <>
      <input
        id="input"
        placeholder="add task..."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button id="add_btn" onClick={handleAddTask}>
        Add Task
      </button>
      <div id="container">
        <ul>
          {tasks.map((task, index) => {
            return (
              <ToDoListItem
                key={index}
                taskName={task}
                taskIndex={index}
                handleRemoveTask={handleRemoveTask}
                handleEditTask={handleEditTask}
                handleInputEditChange={handleInputEditChange}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
