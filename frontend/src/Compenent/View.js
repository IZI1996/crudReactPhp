import React, { Component } from "react";
import axios from "axios";
import Listuser from './Listuser';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nvbar from './Nvbar';

class View extends Component {
  constructor(props) {
    super(props);


    this.state = {
      utilisateur: []
    };
   
  }
  componentDidMount(){
  axios.get("http://localhost/crudreact/back/select.php")
  .then(res =>{
    console.table(res.data)
    this.setState({
      utilisateur: res.data
    });


  })
  .catch(err =>{
    console.log(err)
  })

  }

  List(){
    return this.state.utilisateur.map(obj=>{
       return <Listuser object={obj} />;
    });
  }


  render() {
    return (
      <>
<Nvbar />
<p>welcome to View page </p>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Username</th>
      <th>email</th>
      <th>job</th>
      <th>tel</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
  {this.List()}

  </tbody>
</Table>
            
        
      </>
    );
  }
}
export default View;
