import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// import { response } from 'express';

export default class AdminHomePage extends Component {
 


  render() {
    return (
        <div className="container">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/AdminHomePage" className="navbar-brand">FSR</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/AdminHomePage/flightsList" className="nav-link">Show all available flights</Link>
          </li>
          <li><Link to="/AdminHomePage/Addflight" className="nav-link">Add Flight</Link></li>
          <li><Link to="/AdminHomePage/search" className="nav-link">Search</Link></li>
        </ul>
        </div>
      </nav>
      </div>
    )
  }




}