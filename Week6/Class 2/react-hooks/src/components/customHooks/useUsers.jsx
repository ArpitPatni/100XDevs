import axios from "axios";
import React, { useEffect, useState } from "react";

function useUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return users;
}

export default useUsers;
