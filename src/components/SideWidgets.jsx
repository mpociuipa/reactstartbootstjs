import React from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

const SideWidgets = () => {
  return (
    <div className="col-lg-4">
      <Card className="mb-4">
        <Card.Header>Search</Card.Header>
        <Card.Body>
          <InputGroup>
            <FormControl placeholder="Enter search term..." aria-label="Search term" />
            <Button variant="primary" id="button-search">Go!</Button>
          </InputGroup>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Categories</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <ul className="list-unstyled mb-0">
                <li><a href="#!">Web Design</a></li>
                <li><a href="#!">HTML</a></li>
                <li><a href="#!">Freebies</a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled mb-0">
                <li><a href="#!">JavaScript</a></li>
                <li><a href="#!">CSS</a></li>
                <li><a href="#!">Tutorials</a></li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Header>Side Widget</Card.Header>
        <Card.Body>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</Card.Body>
      </Card>
    </div>
  );
};

export default SideWidgets;
