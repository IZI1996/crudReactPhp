import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Insert extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false;
    
        this.state = {
          username: "",
          job: "",
          email: "",
          tel: "",
          loggedIn,
        };
        this.onChange = this.onChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
      }


      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
    
      SubmitForm(e) {
        e.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const job = this.state.job;
        const tel = this.state.tel;
    
        if (email !== "") {
          
          const url = "http://localhost/crudreact/back/insert.php";
          axios.post(
            url,
            JSON.stringify({
              username: username,
              email: email,
              job: job,
              tel: tel
            })
          ).then(res=>{
            if(res.status==200){
            
              alert(res.data.message)
              this.setState({
                username: "",
                email: "",
                job: "",
                tel:""
              });
            }else{
              console.log("error");
            }
   
          })
    


        }}
      
  render() {
 
    return (
      <>
<p>welcome to Insert page</p>
                 
<Navbar bg="light" expand="lg">
  <Container fluid >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/View">View</Nav.Link>
        <Nav.Link href="/session">Home</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <a href="logout">Logout</a>
      </Navbar.Text>
    </Navbar.Collapse>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Form className="d-grid gap-2 mt-5" onSubmit={this.SubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
                placeholder="Enter Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="job"
                name="job"
                onChange={this.onChange}
                value={this.state.job}
                placeholder="job"
                required
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
            
              <Form.Control
                type="tel"
                name="tel"
                onChange={this.onChange}
                value={this.state.tel}
                placeholder="tel"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
      </>
    );
  }
}
export default Insert;
