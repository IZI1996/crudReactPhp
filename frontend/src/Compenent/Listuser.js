import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';



import 'bootstrap/dist/css/bootstrap.min.css';

class Listuser extends Component {
    constructor(props) {
        super(props);
     this.delete=this.delete.bind(this);
       
      }


      
      delete() {
          axios.get('http://localhost/crudreact/back/delete.php?id='+this.props.object.id)
          .then(res=>{
              if (res){
                window.confirm("are you sur to delete")
                  window. location. reload() 

              }
          })
          .catch(err=>console.log(err));
      }




  render() {
  
    return (
      <>

          <tr>
             <td> {this.props.object.username}</td>
             <td> {this.props.object.email}</td>
             <td> {this.props.object.job}</td>
             <td> {this.props.object.tel}</td>
             <td><button onClick={this.delete}><RiDeleteBin5Fill /></button> 

        <Link to={"/edit/"+this.props.object.id} className="btn "><AiFillEdit /></Link>
           
           </td>

          </tr>

      </>
    );
  }
}
export default Listuser;
