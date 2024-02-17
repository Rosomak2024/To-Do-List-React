import { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    setTask((prevState) => [...prevState, inputValue]);
    setInputValue("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  return (
    <>
      <button onClick={handleAddTask}>Dodaj zadanie</button>

      <input
        id="input"
        placeholder="add text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <ul>
        {task.map((task, index) => {
          return (
            <ToDoListItem
              key={index}
              taskName={task}
              taskIndex={index}
              handleRemoveTask={handleRemoveTask}
            />
          );
        })}
      </ul>
    </>
  );
};
