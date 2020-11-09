import React from "react";
import TodoList from "./toDoList";
export default function ToDo(props) {
  return (
    <div className="App">
      {props.tasks.map((todo, index) => (
        <TodoList
          className="list"
          content={todo}
          key={index}
          id={index}
          onDelete={props.onDelete}
          onSave={props.onSave}
        />
      ))}
    </div>
  );
}
