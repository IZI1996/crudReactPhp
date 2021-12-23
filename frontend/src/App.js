import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Compenent/Login";
import Register from "./Compenent/Register";
import Logout from "./Compenent/Logout";
import Insert from "./Compenent/Insert";
import Session from "./Compenent/Session";
import Edit from "./Compenent/Edit";
import View from "./Compenent/View";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row></Row>
        </Container>

        <Container>
          <Row>
            <Route path="/Login" component={Login} />
            <Route path="/reg" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/session" component={Session} />
            <Route path="/insert" component={Insert}/> 
            <Route path="/edit/:id" component={Edit}/>
           <Route path="/view" component={View}/>



          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
