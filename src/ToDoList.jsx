import { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState, inputValue]);
    setInputValue("");
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); //at  possition index remove 1 item.
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1, inputValue);
    setTasks(newTasks);
    setInputValue("");

    console.log("tasks", tasks);
    console.log("newTasks", newTasks);
    console.log("idex", index);
    console.log("input value", input.value);
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
        {tasks.map((task, index) => {
          return (
            <ToDoListItem
              key={index}
              taskName={task}
              taskIndex={index}
              handleRemoveTask={handleRemoveTask}
              handleEditTask={handleEditTask}
            />
          );
        })}
      </ul>
    </>
  );
};
