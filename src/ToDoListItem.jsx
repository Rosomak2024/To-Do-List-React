import React from "react";
// import { ToDoList } from "./ToDoList";

export const ToDoListItem = (props) => {
  return (
    <>
      <li key={props.taskIndex}>{props.taskName}</li>
      <button onClick={() => props.handleRemoveTask(props.taskIndex)}>
        Remove
      </button>{" "}
      <button onClick={() => props.handleEditTask(props.taskIndex)}>
        Edit
      </button>
    </>
  );
};
