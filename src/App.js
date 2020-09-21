import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Register from './UserComponents/Register';
import Update from './warhouses/Update';
import View from './View';
import Delete from './Delete';
import Home from './Home'
import Warhouse from '../src/warhouses/Warhouse';
import AddNew from '../src/warhouses/AddNew';
import Product from "./ProductComponents/Product"
import { NewProduct as Create } from "./ProductComponents/NewProduct"


function App() {
  return (
    <Router>

      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/Update" exact component={Update} />
        <Route path="/Register" exact component={Register} />
        <Route path="/View" exact component={View} />
        <Route path="/Delete" exact component={Delete} />
        <Route path="/warhouses" exact component={Warhouse} />
        <Route path="/AddNew" exact component={AddNew} />
        <Route path='/Products' exact component={Product} />
        <Route path='/Products/new' exact component={Create} />
      </div>


    </Router>
  );
}

export default App;

