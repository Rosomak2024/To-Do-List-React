import React, { useState } from "react";

export const ToDoListItem = (props) => {
  const [actualTaskName, setActualTaskName] = useState(props.name);
  const [time, setTime] = useState(props.time);

  return (
    <>
      <div className="task_container">
        <li key={props.index}>
          {props.name} {props.time}
        </li>
        <input
          id={props.index}
          onChange={(e) => setActualTaskName(e.target.value)}
          value={actualTaskName}
          placeholder="edit task here"
        ></input>
        <input
          type="number"
          id={props.index + 100}
          onChange={(e) => setTime(e.target.value)}
          value={time}
          placeholder="edit time needed"
        ></input>
        <button
          id="remove_btn"
          onClick={() => props.handleRemoveTask(props.index)}
        >
          Remove
        </button>
        <button
          id="edit_btn"
          onClick={() =>
            props.handleEditTask(props.index, actualTaskName, time)
          }
        >
          Edit
        </button>
      </div>
    </>
  );
};
