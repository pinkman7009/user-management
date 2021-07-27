import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Viewuser = () => {
  const location = useLocation();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const res = location.state;
    console.log(res);
    setUser(res);
  }, [location]);

  return (
    <div className="container">
      <h1>User Details</h1>
      <Link to="/home">
        <button className="add-btn light-hover">Go Back</button>
      </Link>
      <div className="user-row">
        <div className="user-row-header">ID</div>
        <div className="user-row-header">Name</div>
        <div className="user-row-header">Email</div>
        <div className="user-row-header">Phone</div>
      </div>
      <div className="user-row">
        <div className="user-row-item">{user?._id}</div>
        <div className="user-row-item">{user?.name}</div>
        <div className="user-row-item">{user?.email}</div>
        <div className="user-row-item">{user?.phone}</div>
      </div>
    </div>
  );
};

export default Viewuser;
