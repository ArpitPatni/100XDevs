import { useState } from "react";

export default function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    //For keep calling the api every 5 seconds for fresh data
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false)
      });
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false)
    });
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return {todos,loading};
}
