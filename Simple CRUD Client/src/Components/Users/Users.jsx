import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  // fetch users on mount
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers((prev) => [...prev, data]);
        e.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        <h1>Length: {users.length}</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
