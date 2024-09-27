import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FirstTask() {
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
  return (
    <div>
      Users below
      {users.map((user) => (
        <User name={user.name} website={user.website} />
      ))}
    </div>
  );
}
function User({ name, website }) {
  return (
    <div>
      <h1>{name}</h1>
      {website}
    </div>
  );
}

export default FirstTask