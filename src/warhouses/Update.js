import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

class Update extends Component {
  constructor(props){
    super(props);

    this.state ={
      name: props.warhouse.name,
      address: props.warhouse.address,
      city: props.warhouse.city
    }
    this.handleChange = this.handleChange.bind(this);
   this.addedData = this.addedData.bind(this);
  }

  async addedData(){
    const name = this.state.name;
    const address =this.state.address;
    const city = this.state.city;
  
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name , address : address , city : city })
  };
  const response = await fetch('http://localhost:3000/warehouses?id='+ this.props.warhouse.warehouseID, requestOptions);
  const data = await response.json();
  // this.setState({ postId: data.id });
  if(data.success){
    this.props.notifyUpdate()
  }
  else{
    console.log('error');
  }
   console.log(data);  
  };

  handleChange(event){
    this.setState({
        [event.target.id] : event.target.value
    })
    
  
  }
  
 
 render() {
  return(
   <div>
     <form>
     <div class="form-group">
    <label for="name">Id</label>
    <Form.Control type="text" placeholder="Readonly input here..." value={this.props.warhouse.warehouseID}  readOnly />
  </div>
     
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" value={this.state.name} placeholder="name"  onChange = {this.handleChange}/>
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <input type="text" class="form-control" id="address" value={this.state.address}  placeholder="address" onChange = {this.handleChange}/>
  </div>
  <div class="form-group">
    <label for="city">City</label>
    <input type="text" class="form-control" id="city" value={this.state.city}  placeholder="city" onChange = {this.handleChange}/>
  </div>

  
  <button onClick={this.addedData} type="button" class="btn btn-primary">Update</button>
  
  
    </form>
   </div>
    )
   }
 }



export default Update