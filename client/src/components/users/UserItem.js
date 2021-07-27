import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user, handleDelete }) => {
  return (
    <div className="user-row">
      <div className="user-row-item">{user._id}</div>
      <div className="user-row-item">{user.name}</div>
      <div className="user-row-item">
        <Link to={{ pathname: "/viewuser", state: user }}>
          <button className="small-btn">View</button>
        </Link>

        <Link to={`/userform/${user._id}`}>
          <button className="small-btn small-btn-green">Edit</button>
        </Link>

        <button
          className="small-btn small-btn-red"
          onClick={() => handleDelete(user._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
