import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Register from './Register';
import Update from './warhouses/Update';
import View from './View';
import Delete from './Delete';
import Home from './Home'
import Warhouse from '../src/warhouses/Warhouse';
import AddNew from '../src/warhouses/AddNew';



function App() {
  return (
    <Router>
    <div className = "container">
    <Navbar />
   <br/>
     <Route path = "/" exact component = {Home} />
     <Route path = "/Update" exact component = {Update} />
     <Route path = "/Register" exact component = {Register} />
     <Route path = "/View" exact component = {View} />
     <Route path = "/Delete" exact component = {Delete} />
     <Route path = "/warhouses" exact component = {Warhouse} />
     <Route path = "/AddNew" exact component = {AddNew} />

    </div>
   

  </Router>
  );
}

export default App;

