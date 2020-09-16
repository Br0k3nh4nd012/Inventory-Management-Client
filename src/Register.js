import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Register = (props) => {
  return(
    <div>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">UserName</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="username" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Role</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option>--choose--</option>
      <option>Super Admin</option>
      <option>Warhouse Manager</option>
      <option>Gatekeeper</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
  
  
    </form>
    </div>
   )

 }

export default Register;