import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// import { response } from 'express';

export default class UserHomePage extends Component {
 


  render() {
    return (
        <div className="container">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={"/UserHomePage"+(window.location.pathname.substring(13))} className="navbar-brand">FSR</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li><Link to={"/UserHomePage/userSearch"+(window.location.pathname.substring(13))} className="nav-link">Search</Link></li>
          <li><Link to={"/UserHomePage/reservationList"+(window.location.pathname.substring(13))} className="nav-link">Reservations</Link></li>
          <li><Link to={"/UserHomePage/editUser"+(window.location.pathname.substring(13))} className="nav-link">Edit Personal Information</Link></li>

        </ul>
        </div>
      </nav>
      </div>
    )
  }




}