import React, { useState } from "react";

function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete,setComplete]=useState(false)

  // Function to add a new todo
  const addTodo = async () => {
    if (!title || !description) {
      alert("Please fill out both fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          complete: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const data = await response.json();
      console.log(data)
      // If the response contains updated todos list
      console.log("After data")
      if (data.todos && Array.isArray(data.todos)) {
        setTodos(data.todos); // Update the todos list
        console.log("Inside if")
      } else {
        // If only the new todo item is returned
        console.log("inside elde")
        setTodos((prevTodos) => [...prevTodos, data.todos]);
      }

      // Clear input fields after adding
      console.log("Clearing inputs")
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "10px" }}
        type="text"
        placeholder="Title"
      />
      <br />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: "10px" }}
        type="text"
        placeholder="Description"
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default CreateTodo;
