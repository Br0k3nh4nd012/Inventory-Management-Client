import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { UpdateProduct as Update } from './UpdateProduct';
import redirect, { Route } from 'react-router-dom';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            updating: null

        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.notifyUpdate = this.notifyUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }


    async componentDidMount() {
        // const response = await fetch('http://localhost:3000/warehouses/');
        // const data = await response.json();

        // console.log(data.data);
        // this.setState({
        //     warhouses: data.data,

        // });
        this.getProducts();
        console.log(this.state.warhouses);
    }

    notifyUpdate() {
        this.setState({
            updating: null
        })
        this.getProducts();
    }

    async getProducts() {
        const response = await fetch('http://localhost:5000/products/');
        const json_response = await response.json();

        console.log(json_response.data);
        this.setState({
            products: [...json_response.data.products],
        });
    }

    async handleDelete(e) {
        var result = window.confirm("Want to delete?");
        if (result) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },

            };
            const newId = e.target.id;
            const response = await fetch('http://localhost:5000/products?id=' + newId, requestOptions);
            const data = await response.json();
            // this.setState({ postId: data.id });
            console.log(data);
            this.getProducts();
        }
        else {
            console.log('delete cancelled');

        }

    }

    handleUpdateClick(e) {
        let id = e.target.id;
        const filtered = this.state.products.filter(product => product.productID == id);
        const productNew = filtered[0];
        this.setState({
            updating: productNew,
        })
        console.log(productNew);


    }

    render() {
        return (
            <>

                <div>
                    {/* {homes.map(home => <div>{home.name}</div>)} */}
                    {/* <button OnClick={this.navigate.bind(this)} type="submit" class="btn btn-primary">Add</button> */}
                    <Link to="/Products/new" className="btn btn-primary my-4 float-right">+ Add new product</Link>
                    {/* <div><h1>{this.state.warhouse.id}</h1></div> */}
                    {/* {this.state.warhouses.map((warhouse) => {
                return(
                    <div key={warhouse._id}>
                        <p>{warhouse.name}</p>
                    </div>
                )
            })} */}
                    {this.state.updating ? <Update product={this.state.updating} notifyUpdate={this.notifyUpdate} /> : <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Weight</th>
                                <th>Category</th>
                                <th>Sub Category</th>
                                <th>Expiry Period</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {this.state.products.map((product, index) => {

                            return (

                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{product.productID}</td>
                                        <td>{product.name}</td>
                                        <td>{product.weight}</td>
                                        <td>{product.category}</td>
                                        <td>{product.subCategory}</td>
                                        <td>{product.isExpirable ? product.expiryPeriod : "None"}</td>
                                        <td>
                                            <div className='editing'>

                                                <button type="submit" className="btn btn-primary mr-1" id={product.productID} onClick={this.handleUpdateClick}>Update</button>



                                                <button type="submit" className="btn btn-danger" id={product.productID} onClick={this.handleDelete}>Delete</button>

                                            </div>


                                        </td>
                                    </tr>

                                </tbody>

                            )




                        })}



                    </Table>}





                </div>
            </>
        )
    }
}



export default Product;

