import React from "react";
import { Table, Container } from "react-bootstrap";

export const DataTable = ({ fdata }) => {
  console.log(fdata);
  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Address</th>
            <th>Country</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {fdata.map(d => {
            return (
              <tr>
                <td>{d.fname}</td>
                <td>{d.lname}</td>
                <td>{d.mname}</td>
                <td>{d.addr}</td>
                <td>{d.country}</td>
                <td>{d.state}</td>
                <td>{d.zip}</td>
                <td>{d.email}</td>
                <td>{d.phno}</td>
                <td>{d.height}</td>
                <td>{d.weight}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
