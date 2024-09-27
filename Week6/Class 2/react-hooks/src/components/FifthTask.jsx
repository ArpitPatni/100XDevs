import axios from "axios";
import React, { useEffect, useState } from "react";
import useUsers from "./customHooks/useUsers";

function FifthTask() {
const users=useUsers();
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

export default FifthTask;
