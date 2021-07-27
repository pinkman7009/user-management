import React, { useState, useEffect } from "react";
import "../../styles/userform.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
    };

    try {
      const res = await axios.post("api/v1/users", user);

      setMessage("User created successfully");
      setError("");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      phone,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/v1/users/${userId}`,
        user
      );

      setMessage("User updated successfully");
      setError("");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/users/${userId}`
        );

        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setPhone(res.data.data.phone);
      } catch (error) {
        // setError(error.response.data.error);
      }
    };
    if (userId !== undefined) {
      fetchUserDetails();
    }
  }, []);
  return (
    <>
      <Link to="/home">
        <button className="add-btn light-hover">Go Back</button>
      </Link>
      {message && <div className="success-box">{message}</div>}
      <div className="form">
        <div className="form-group">
          {error && <div className="error">{error}</div>}
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            placeholder="enter phone number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        {userId === undefined ? (
          <button className="add-btn" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="add-btn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </>
  );
};

export default Form;
