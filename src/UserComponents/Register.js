import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class UserRegister extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      email : "",
      phone : "",
      password : "",
      role : ""
    }
  }



  handleChange(event){
  this.setState({
      [event.target.id] : event.target.value
  })
  

}
  render() {
    return (<div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">UserName</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="username" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Password" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" onChange={this.handleChange} placeholder="name@example.com" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Role</label>
          <select class="form-control" onChange={this.handleChange} id="exampleFormControlSelect1">
            <option>--choose--</option>
            <option>Super Admin</option>
            <option>Warhouse Manager</option>
            <option>Gatekeeper</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>


      </form>
    </div>);
  }
}

export default UserRegister;
