import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {

            // username: props.users.username,
            email: props.user.email,
            phone: props.user.phone,
            role: props.user.role
        }
        this.handleChange = this.handleChange.bind(this);
        this.addedData = this.addedData.bind(this);
        this.roles = [
            {
                name: 'ADMIN',
                readable_name: 'ADMIN'
            },
            {
                name: 'WRH_MGR',
                readable_name: 'Warehouse Manager'
            },
            {
                name: 'GATE_KPR',
                readable_name: 'Gate Keeper'
            }
        ]
    }

    async addedData() {
        // const username = this.state.username;
        const email = this.state.email;
        const phone = this.state.phone;
        const role = this.state.role;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, phone: phone, role: role })
        };
        const response = await fetch('http://localhost:5000/users?username=' + this.props.user.username, requestOptions);
        const data = await response.json();
        // this.setState({ postId: data.id });
        if (data.success) {
            this.props.notifyUpdate()
        }
        else {
            console.log('error');
        }
        console.log(data);
    };

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })


    }


    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="name">Id</label>
                        <Form.Control type="text" placeholder="Readonly input here..." value={this.props.user.username} readOnly />
                    </div>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control" id="phone" onChange={this.handleChange} value={this.state.phone} />
                    </div>

                    <div class="form-group">
                        <label for="role">Role</label>
                        <select class="form-control" onChange={this.handleChange} id="role">
                            {
                                this.roles.map(object => {
                                    return (
                                        <option selected={object.name === this.state.role} value={object.name}>{object.readable_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button onClick={this.addedData} type="button" class="btn btn-primary">Update</button>


                </form>
            </div>
        )
    }
}



export default Update;