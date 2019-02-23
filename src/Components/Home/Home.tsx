import React, { Component } from "react";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends Component {
  public render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>A website built with React, React-Router, and React-Bootstrap</p>
          <Link to="/about">
            <Button variant="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" rounded className="profile-pic" />
            <h3>Frank</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" rounded className="profile-pic" />
            <h3>Vanessa</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" rounded className="profile-pic" />
            <h3>Riff</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
