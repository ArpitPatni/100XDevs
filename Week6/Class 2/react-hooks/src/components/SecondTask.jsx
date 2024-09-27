import axios from "axios";
import React, { useEffect, useState } from "react";

function SecondTask() {
    const [selectedId,setSelectedId]=useState(1);
    console.log(selectedId)
  return (
    <div>
        <button onClick={()=>setSelectedId(1)}>1</button>
        <button onClick={()=>setSelectedId(2)}>2</button>
        <button onClick={()=>setSelectedId(3)}>3</button>
        <button onClick={()=>setSelectedId(4)}>4</button>
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [tasks, setTask] = useState([]);

  //implement effect here
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=" + id)
      .then((response)=>setTask(response.data))
  }, [id]);
  return (
    <div>
        <h1>{id}</h1>
     {tasks.map((task)=>{
        return <h1>{task.name}</h1>
     })}
    </div>
  );
}

export default SecondTask;
