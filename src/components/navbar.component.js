import React, { Component } from 'react';
import { Link } from  'react-router-dom';

export default class Navbar extends Component {
// it will return all the navbar components
    render() {
      var C = {
        color: "white",
      }
      return (
        <nav className="navbar breadcrumb bg-info navbar-dark navbar-expand-lg jumbotron-fluid">
          <Link to="/" className="navbar-brand">Patients Record Keeper</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link style={C} to="/" className="nav-link">Patients Log</Link>
            </li>
            <li className="navbar-item">
            <Link style={C} to="/create" className="nav-link">Create A Log</Link>
            </li>
            <li className="navbar-item">
            <Link style={C} to="/user" className="nav-link">Patient's Info</Link>
            </li>
          </ul>
          </div>
        </nav>
      );
    }
  }
