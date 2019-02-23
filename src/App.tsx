import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import MenuBar from "./Components/MenuBar";
import News from "./Components/News/News";

class App extends Component {
  public render() {
    return (
      <Router>
        <Container>
          <MenuBar />
          <Route path="/Home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </Container>
      </Router>
    );
  }
}

export default App;
