import React from "react";

const ToDo = (props) => {
  return (
    <div>
      <p
        style={{ textDecoration: props.todo.completed ? "line-through" : null }}
        onClick={() => props.toggleCompleted(props.todo.id)}
      >
        {props.todo.task}
      </p>
    </div>
  );
};

export default ToDo;
