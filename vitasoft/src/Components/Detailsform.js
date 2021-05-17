import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

import "./Detailsform.css";
export const Detailsform = ({ setFdata }) => {
  const [data, setData] = useState([
    {
      fname: "",
      lname: "",
      mname: "",
      addr: "",
      country: "",
      state: "",
      zip: null,
      email: "",
      phno: null,
      height: null,
      weight: null
    }
  ]);

  const inputEvent = event => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  function addData() {
    setFdata(d => [...d, data]);
    setData({
      fname: "",
      lname: "",
      mname: "",
      email: "",
      phno: null,
      addr: "",
      country: "",
      state: "",
      zip: null,
      height: null,
      weight: null
    });
  }

  // const addData = async e => {
  //   const {
  //     fname,
  //     lname,
  //     mname,
  //     addr,
  //     country,
  //     state,
  //     zip,
  //     email,
  //     phno,
  //     height,
  //     weight
  //   } = data;

  //   const res = await fetch("/form/save-details", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       fname,
  //       lname,
  //       mname,
  //       addr,
  //       country,
  //       state,
  //       zip,
  //       email,
  //       phno,
  //       height,
  //       weight
  //     })
  //   });

  //   const data = await res.json();
  //   if (data.status === 422 || !data) {
  //     window.alert("Fields Missing");
  //   } else {
  //     window.alert("Data successfully added");
  //   }
  // };

  return (
    <Container>
      <div class="card1">
        <Col sm={12} md={5} lg={10}>
          <Form method="POST">
            <Form.Group controlId="formGridName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="fname"
                onChange={inputEvent}
                value={data.fname}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lname"
                onChange={inputEvent}
                value={data.lname}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridName">
              <Form.Label>Middle Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your middle name"
                name="mname"
                onChange={inputEvent}
                value={data.mname}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email id"
                name="email"
                onChange={inputEvent}
                value={data.email}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="contact number"
                name="phno"
                onChange={inputEvent}
                value={data.phno}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="addr"
                onChange={inputEvent}
                value={data.addr}
                required
              />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  name="country"
                  onChange={inputEvent}
                  value={data.country}
                  defaultValue="Choose..."
                  required
                >
                  <option>Choose...</option>
                  <option>India</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Austria</option>
                  <option>Bangladesh</option>
                  <option>US</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  onChange={inputEvent}
                  value={data.state}
                  defaultValue="Choose..."
                  required
                >
                  <option>Choose...</option>
                  <option>Assam</option>
                  <option>Kerela</option>
                  <option>UttarPradesh</option>
                  <option>Maharashtra</option>
                  <option>TamilNadu</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="zip code"
                  name="zip"
                  onChange={inputEvent}
                  value={data.zip}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formGridName">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Height(ft/inch)"
                  name="height"
                  onChange={inputEvent}
                  value={data.height}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridName">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your weight(kgs)"
                  name="weight"
                  onChange={inputEvent}
                  value={data.weight}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={addData}>
              Save
            </Button>
          </Form>
        </Col>
      </div>
    </Container>
  );
};
