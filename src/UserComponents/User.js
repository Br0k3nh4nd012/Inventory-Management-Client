import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Update from "./updateUser";
import './UserStyles.css'
import redirect from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updating: null,
    };
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.notifyUpdate = this.notifyUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  async componentDidMount() {
    // const response = await fetch('http://localhost:3000/warehouses/');
    // const data = await response.json();

    // console.log(data.data);
    // this.setState({
    //     warhouses: data.data,

    // });
    this.getUsers();
    console.log(this.state.users);
  }

  notifyUpdate() {
    this.setState({
      updating: null,
    });
    this.getUsers();
  }

  async getUsers() {
    const response = await fetch("http://localhost:5000/users/");
    const data = await response.json();

    console.log(data.data);
    this.setState({
      users: data.data,
    });
  }

  async handleDelete(e) {
    var result = window.confirm("Want to delete?");
    if (result) {
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const newId = e.target.id;
      const response = await fetch(
        "http://localhost:5000/users?username=" + newId,
        requestOptions
      );
      const data = await response.json();
      // this.setState({ postId: data.id });
      console.log(data);
      this.getUsers();
    } else {
      console.log("delete cancelled");
    }
  }

  handleUpdateClick(e) {
    let username = e.target.id;
    const filtered = this.state.users.filter(
      (users) => users.username == username
    );
    const userNew = filtered[0]; //object
    this.setState({
      updating: userNew,
    });
    console.log(userNew);
  }

  render() {
    return (
      <div>
        {/* {homes.map(home => <div>{home.name}</div>)} */}
        {/* <button OnClick={this.navigate.bind(this)} type="submit" class="btn btn-primary">Add</button> */}
        <Link to="/adduser
        " className="btn btn-primary mr-1">
          + addNew
        </Link>
        {/* <div><h1>{this.state.warhouse.id}</h1></div> */}
        {/* {this.state.warhouses.map((warhouse) => {
                return(
                    <div key={warhouse._id}>
                        <p>{warhouse.name}</p>
                    </div>
                )
            })} */}
        {this.state.updating ? (
          <Update
            user={this.state.updating}
            notifyUpdate={this.notifyUpdate}
          />
        ) : (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>S no</th>
                <th>UserName</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            {this.state.users.map((user , index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index+1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      <div className="editing">
                        <button
                          type="submit"
                          class="btn btn-primary mr-1"
                          id={user.username}
                          onClick={this.handleUpdateClick}
                        >
                          Update
                        </button>
                        <button
                          type="submit"
                          class="btn btn-danger"
                          id={user.username}
                          onClick={this.handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        )}
      </div>
    );
  }
}

export default User;
