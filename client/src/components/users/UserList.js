import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("api/v1/users");
        setUsers(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [users]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`api/v1/users/${id}`);
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-table">
      <div className="user-row">
        <div className="user-row-header">ID</div>
        <div className="user-row-header">Name</div>
        <div className="user-row-header"></div>
      </div>

      {users.map((user) => (
        <UserItem key={user._id} user={user} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
