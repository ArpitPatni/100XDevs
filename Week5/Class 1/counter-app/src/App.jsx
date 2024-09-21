import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Need to go to Gym",
      completed: true,
    },
    {
      title: "Go to School",
      description: "Need to go to school",
      completed: true,
    },
  ]);

  function addTodo(){
    setTodos([...todos,{title:"Go to PlaySchool",description:"Need to go to playschool",completed:true}])
  }
  return (
    <div>

      <Custombuttom count={count} setCount={setCount} />

      <h1>Todos App Below</h1>
      <button onClick={addTodo}>Add Random Todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}
function Custombuttom({ count, setCount }) {
  function handlClick() {
    setCount(count + 1);
  }
  return <button onClick={handlClick}>count {count}</button>;
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}
export default App;
