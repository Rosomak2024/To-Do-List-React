import React from "react";
// import { ToDoList } from "./ToDoList";

export const ToDoListItem = (props) => {
  return (
    <>
      <li key={props.taskIndex}>{props.taskName}</li>
      <input
        id={props.taskIndex}
        onChange={props.handleInputEditChange}
        value={props.inputEditValue}
      ></input>
      <button
        id="remove_btn"
        onClick={() => props.handleRemoveTask(props.taskIndex)}
      >
        Remove
      </button>
      <button
        id="edit_btn"
        onClick={() => props.handleEditTask(props.taskIndex)}
      >
        Edit
      </button>
    </>
  );
};
