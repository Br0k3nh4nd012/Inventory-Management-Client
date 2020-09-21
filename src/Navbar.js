import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Inventory Management</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/Register" className="nav-link">Register</Link>
            </li>

            <li className="navbar-item">
              <Link to="/View" className="nav-link">View</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Products" className="nav-link">Products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/warhouses" className="nav-link">Warhouses</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;