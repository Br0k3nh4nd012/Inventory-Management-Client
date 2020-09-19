import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from 'react-router-dom';



class AddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      addedSuccess: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.addedData = this.addedData.bind(this);
  }


  async addedData() {
    const name = this.state.name;
    const address = this.state.address;
    const city = this.state.city;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, address: address, city: city })
    };
    const response = await fetch('http://localhost:5000/warehouses/', requestOptions);
    const data = await response.json();
    // this.setState({ postId: data.id });
    console.log(data);
    if (data.success) {
      this.setState({
        addedSuccess: true
      })

    }
  };

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })


  }

  render() {
    return (
      <div>
        <form >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="name" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="address" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="city" onChange={this.handleChange} />
          </div>


          <button onClick={this.addedData} type="button" class="btn btn-primary">Add</button>
          {this.state.addedSuccess ? <Redirect to='/warhouses' /> : console.log('fail')}


        </form>
      </div>
    )
  }
}


export default AddNew;