import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import MenuBar from "./Components/MenuBar/MenuBar";
import News from "./Components/News/News";

const App: React.SFC = () => (
  <Router>
    <Container>
      <MenuBar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
    </Container>
  </Router>
);

export default App;
