import React from "react";

function Todos({ todos }) {
  if (!Array.isArray(todos)) return null;
    console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
