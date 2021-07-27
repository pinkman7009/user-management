import React from "react";
import "../styles/home.css";
import UserList from "../components/users/UserList";
import plusIcon from "../assets/plus.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>User Management System</h1>
      <div className="top-bar">
        <p className="text-lg">List of all users :</p>
        <Link to="/userform">
          <button className="add-btn-lg">
            <img src={plusIcon} alt="plus" />
            Add User
          </button>
        </Link>
      </div>
      <UserList />
    </div>
  );
};

export default Home;
