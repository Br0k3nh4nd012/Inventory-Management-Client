import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './Warhouse.css';
import Update from './Update';
import redirect from 'react-router-dom';


class Warhouse extends Component {
    constructor(props){
        super(props);
        this.state = {
            warhouses: [],
            updating: null

        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.notifyUpdate = this.notifyUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getWarhouses = this.getWarhouses.bind(this);
    }
    
   
 async componentDidMount(){
    // const response = await fetch('http://localhost:3000/warehouses/');
    // const data = await response.json();

    // console.log(data.data);
    // this.setState({
    //     warhouses: data.data,
        
    // });
 this.getWarhouses();
    console.log(this.state.warhouses);
 }

 notifyUpdate(){
     this.setState({
         updating: null
     })
     this.getWarhouses();
 }

 async getWarhouses(){
    const response = await fetch('http://localhost:5000/warehouses/');
    const data = await response.json();

    console.log(data.data);
    this.setState({
        warhouses: data.data,
        
    });
 }

 async handleDelete(e){
    var result = window.confirm("Want to delete?");
    if (result) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            
        };
        const newId = e.target.id;
        const response = await fetch('http://localhost:3000/warehouses?id='+ newId, requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
         console.log(data);
         this.getWarhouses(); 
    }
    else{
        console.log('delete cancelled');
        
    }

 }

 handleUpdateClick(e){
        let id = e.target.id;
        const filtered = this.state.warhouses.filter(warhouse => warhouse._id==id);
        const warhouseNew = filtered[0];
        this.setState({
            updating: warhouseNew,
        })
        console.log(warhouseNew);
        

 }

 render() {
  return(
   <div>
       {/* {homes.map(home => <div>{home.name}</div>)} */}
            {/* <button OnClick={this.navigate.bind(this)} type="submit" class="btn btn-primary">Add</button> */}
            <Link to="/AddNew" className="nav-link">+ addNew</Link>
            {/* <div><h1>{this.state.warhouse.id}</h1></div> */}
            {/* {this.state.warhouses.map((warhouse) => {
                return(
                    <div key={warhouse._id}>
                        <p>{warhouse.name}</p>
                    </div>
                )
            })} */}
{this.state.updating? <Update warhouse={this.state.updating} notifyUpdate={this.notifyUpdate} /> : <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Warehouse ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>City</th>
      <th>Actions</th>
    </tr>
  </thead>
  
      {this.state.warhouses.map((warhouse) => {
         
          return(
             
            <tbody>
            <tr>
    <td>1</td>
    <td>{warhouse.warehouseID}</td>
    <td>{warhouse.name}</td>
    <td>{warhouse.address}</td>
    <td>{warhouse.city}</td>
    <td>
        <div className='editing'>
        
    <button  type="submit" class="btn btn-primary mr-1" id={warhouse._id} onClick = {this.handleUpdateClick}>Update</button>
    
    
   
    <button type="submit" class="btn btn-primary" id={warhouse.warehouseID} onClick = {this.handleDelete}>Delete</button>
   
        </div>
    

    </td>
  </tr>

            </tbody>

          )
              
               

              
      })}
   
   

</Table>}





    </div>
    )
   }
 }



 export default Warhouse;

 