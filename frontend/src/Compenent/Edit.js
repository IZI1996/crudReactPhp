import axios from "axios";
import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import Nvbar from './Nvbar';

import { Link, Redirect } from "react-router-dom";



class Edit extends Component {
    

 constructor(props) {
        super(props);
        let redirect = false;
    
         this.state = {
          username: "",
          job: "",
          email: "",
          tel: "",
          redirect,
        };
        this.onChange = this.onChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
      }




       componentDidMount(){
  axios.get("http://localhost/crudreact/back/edit.php?id="+this.props.match.params.id)
  .then(res =>{
    this.setState({
      username: res.data.username,
        email: res.data.email,
          job: res.data.job,
            tel: res.data.tel
    });


  })
  .catch(err =>{
    console.log(err)
  })

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


       
        const url = "http://localhost/crudreact/back/update.php?id=" +this.props.match.params.id;

        axios.post(url,     
           JSON.stringify({
          username: username,
          email: email,
          job: job,
          tel: tel,
        })
        )
        .then(res =>{
          if(res.status==200){
            this.setState({
              redirect:true
            })
          }
       
      
      
        })
      }

  render() {
 if(this.state.redirect==true){
  return <Redirect to="/view" />;

 }
    return (
      <>
<Nvbar />

<p>welcome to Insert page</p>
                 

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

            <Button variant="success" type="submit"  >
              Submit
            </Button>
          </Form>
      </>
    );
  }
}
export default Edit;
