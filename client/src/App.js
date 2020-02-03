import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Search from './pages/Search';
import Saved from './pages/Saved';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Find Books!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/" component={Search}/>
              <Route path="/saved" component={Saved}/>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
