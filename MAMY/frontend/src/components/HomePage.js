import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// import { response } from 'express';

export default class AdminHomePage extends Component {
 


  render() {
    return (
        
        <div className="container">
            <Link to={{pathname : '/login' }} >
            <button type="button" class="btn btn-dark">Login</button>
            </Link>
        </div>
    )
  }




}