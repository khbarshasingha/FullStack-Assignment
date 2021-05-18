import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const loginForm = () => {
  const [logindata, setLogindata] = useState([{ uname: "", pwd: "" }]);

  const inputEvent = event => {
    const { name, value } = event.target;

    setLogindata({ ...logindata, [name]: value });
  };
  return (
    <div>
      <Form>
        <Form.Group controlId="formGridName">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            name="uname"
            onChange={inputEvent}
            value={data.uname}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGridName">
          <Form.Label>Middle Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your password"
            name="pwd"
            onChange={inputEvent}
            value={data.pwd}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitData}>
          Login
        </Button>
      </Form>
    </div>
  );
};
