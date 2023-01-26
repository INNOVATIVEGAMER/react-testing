import React, { useEffect, useState } from "react";
import { IUsersProps } from "./users.types";

const Users = (props: IUsersProps) => {
  const [users, setusers] = useState<string[]>([]);
  const [error, seterror] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const usersList = data.map((user: { name: string }) => user.name);
        setusers(usersList);
        seterror(null);
      } catch (error) {
        setusers([]);
        seterror("Error Fetching Users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
