import React, { Component, useEffect, useState } from "react"


export const UpdateProduct = (props) => {

    const props_product = { ...props.product }

    const [product, setProduct] = useState(props_product)


    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
        console.log(product)
    }

    const handleSubmit = async (event) => {
        // event.preventDefault()

        const response = await fetch('http://localhost:5000/products/', {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ ...product })
        })

        const json_resp = await response.json()

        if (json_resp.success) {
            props.notifyUpdate()
        }

    }

    return (
        <div className="container mx-auto">

            <div className="form-row form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name='name' id="name" onChange={handleChange} value={product.name} />
            </div>
            <div className="form-row form-group">
                <label htmlFor="weight">Weight</label>
                <input className="form-control" type="number" name='weight' id="weight" onChange={handleChange} value={product.weight} />
            </div>
            <div className="form-row form-group">
                <label htmlFor="category">Category</label>
                <input className="form-control" type="text" name='category' id="category" onChange={handleChange} value={product.category} />
            </div>
            <div className="form-row form-group">
                <label htmlFor="subCategory">Sub Category</label>
                <input className="form-control" type="text" name='subCategory' id="subCategory" onChange={handleChange} value={product.subCategory} />
            </div>
            <div className="form-row form-group">
                Expirable
                    <label htmlFor="isExpirableYes">Yes</label>
                <input className="form-control" type='radio' id='isExpirableYes' name='isExpirable' onChange={handleChange} checked={product.isExpirable == true} value={true} />
                <label htmlFor="isExpirableNo">No</label>
                <input className="form-control" type='radio' id='isExpirableNo' name='isExpirable' onChange={handleChange} checked={product.isExpirable != true} value={false} />
            </div>
            <div className="form-row form-group">
                <label htmlFor="expiryPeriod">Expiry Period</label>
                <input className="form-control" disabled={product.isExpirable != true} name='expiryPeriod' id="expiryPeriod" onChange={handleChange} value={product.expiryPeriod} />
            </div>
            <div className="form-row form-group">
                <button onClick={handleSubmit} className="form-control" type="submit" value="submit" class='btn btn-primary' >
                    Submit
                </button>
            </div>

        </div>
    )
}