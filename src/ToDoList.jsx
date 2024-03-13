import { useState } from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { name: "zrób pompki", time: 10 },
    { name: "zrób przysiady", time: 6 },
  ]);
  const [task, setTask] = useState({ name: "", time: 0 });

  const actualNameChange = (value) => {
    setTask({ ...task, name: value });
  };

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState, task]);
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  const handleEditTask = (index, taskName, time) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1, { name: taskName, time: time });

      return newTasks;
    });
  };

  const result = tasks.reduce((total, task) => {
    const taskTime = parseFloat(task.time);
    return total + taskTime;
  }, 0);

  return (
    <>
      <div id="container">
        <h3>THE TIME TASK APP</h3>
        <div id="header_container">
          <input
            id="inputName"
            placeholder="add task name..."
            value={task.name}
            onChange={(e) => actualNameChange(e.target.value)}
          ></input>
          <input
            type="number"
            id="inputTime"
            placeholder="add task time..."
            value={task.time}
            onChange={(e) => setTask({ ...task, time: e.target.value })}
          ></input>
          <button id="add_btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <h2>
          Time needed to finish {tasks.length} tasks is: {result} min
        </h2>
        <div id="main_container">
          <ul>
            {tasks.map((task, index) => {
              return (
                <ToDoListItem
                  key={index}
                  name={task.name}
                  index={index}
                  handleRemoveTask={handleRemoveTask}
                  handleEditTask={handleEditTask}
                  time={task.time}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
