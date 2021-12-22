import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
// import { response } from 'express';
export default class userLogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
      ,password: this.state.password

    }

    

    axios.post('http://localhost:5000/Home/UserLogin', user)
    .then( 
      response => {
        
       if(response.data._id!="null")
        {
          window.location="/UserHomePage/"+response.data._id
        } 

      })
      .catch((error) => {
        console.log(error);
      });
    
  }

 



  render() {
    return (
      <div className='container'>
        <h3>login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
        <br></br>
        <h6>or</h6>
        <br></br>
        
         <Link to={{pathname:"/UserHomePage/"+"666666666666666666666666"}}><button type="button" class="btn btn-dark" >Continue as a Geust User</button></Link>


        <br></br>
        <h6>or</h6>
        <br></br>
        <Link to={{pathname : '/userSignUp' }} >
            <button type="button" class="btn btn-dark">Signup</button>
            </Link>

      </div>
    )
  }




}
























