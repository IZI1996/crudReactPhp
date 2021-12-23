import axios from "axios";
import React,{Component} from "react";
import {Redirect} from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';





 class Session extends Component{
    constructor(props) {
        super(props)
        const token=localStorage.getItem("access_token");

     let loggedIn =true;
     if(token == null){
         loggedIn = false;
     }
     this.state={
         loggedIn,
         username:""
     }
     }

     
    render()  {
        const dataa=localStorage.getItem("data");
        const datauser = dataa.split(/[,,"]/);

        var username=datauser[3];
        console.log(username)
       
        if (this.state.loggedIn === false){
            return <Redirect to="/Login"/>
          }
        return(
            <div>
                 
                 <Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/View">View</Nav.Link>
        <Nav.Link href="/insert">Insert</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <a href="logout">Logout</a>
      </Navbar.Text>
    </Navbar.Collapse>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

                <h1> welcome <span style={{color: "black"}}> {username}</span> To your Acount </h1>
                       <h2>CRUD</h2>



            </div>
        )
    }
}
export default Session;