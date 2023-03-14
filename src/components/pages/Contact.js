import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Learn from './Project';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import contactImage from "../images/contact.mode.png";

function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {contactImage} />
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <Card.Text>
          You may get in touch through the information below.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>lawzstopwar@gmail.com</ListGroup.Item>
        <ListGroup.Item>Contact number provided upon request</ListGroup.Item>
        <ListGroup.Item>PDF version of my resume will be provided upon request</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/Lawzstopwar">Github Profile</Card.Link>
        <Card.Link href="https://www.linkedin.com/in/lawz-stopwar-50a18725a/">LinkedIn Page</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;


