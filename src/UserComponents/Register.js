import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from 'react-router-dom';

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
      role: "",
      addedSuccess : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.addedData = this.addedData.bind(this);
  }

  async addedData() {
    const username = this.state.username;
    const email = this.state.email;
    const phone = this.state.phone;
    const password = this.state.password;
    const role = this.state.role;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        phone: phone,
        password: password,
        role: role,
      }),
    };
    const response = await fetch(
      "http://localhost:5000/users/",
      requestOptions
    );
    const data = await response.json();
    // this.setState({ postId: data.id });
    console.log(data);
    if (data.success) {
      this.setState({
        addedSuccess: true,
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  render() {
    return (
      this.state.addedSuccess ? <Redirect to = '/users' />:
      <div>
          <div class="form-group">
            <label for="Username">UserName</label>
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={this.handleChange}
              placeholder="username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              onChange={this.handleChange}
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              onChange={this.handleChange}
            />
          </div>

          <div class="form-group">
            <label for="role">Role</label>
            <select class="form-control" onChange={this.handleChange} id="role">
              <option>--choose--</option>
              <option value="ADMIN">Super Admin</option>
              <option value="WRH_MGR">Warhouse Manager</option>
              <option value="GATE_KPR">Gatekeeper</option>
            </select>
          </div>
          <button onClick={this.addedData} type="button" class="btn btn-primary">Register New User</button>
          
      </div>
    );
  }
}

export default UserRegister;
