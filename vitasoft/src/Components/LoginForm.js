import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  let history = useHistory();
  const [logindata, setLogindata] = useState({ uname: "", pwd: "" });

  const inputEvent = event => {
    const { name, value } = event.target;

    setLogindata({ ...logindata, [name]: value });
  };

  const submitData = async () => {
    const { uname, pwd } = logindata;
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        { uname, pwd },
        config
      );
      if (data.message) {
        alert("successfully logged in");
        history.push("/form");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          submitData();
        }}
      >
        <Form.Group controlId="formGridName">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="uname"
            onChange={inputEvent}
            value={logindata.uname}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridName">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="pwd"
            onChange={inputEvent}
            value={logindata.pwd}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
