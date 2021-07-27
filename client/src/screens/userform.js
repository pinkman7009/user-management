import React from "react";
import Form from "../components/ui/Form.js";
import "../styles/userform.css";
import { useParams } from "react-router-dom";

const Userform = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className="container">
      {id !== undefined ? <h1>Update User</h1> : <h1>Create New User</h1>}
      <Form userId={id} />
    </div>
  );
};

export default Userform;
