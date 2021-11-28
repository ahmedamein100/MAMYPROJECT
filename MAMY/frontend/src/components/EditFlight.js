import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
//import { withRouter } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import DateTimePicker from 'react-datetime-picker';

// const Flights = props => (
//   <tr>
//     <td>{props.flights.To}</td>
//     <td>{props.flights.From}</td>
//     <td>{props.flights.Date.substring(0,10)}</td>
//     <td>{props.flights.Economy}</td>
//     <td>{props.flights.Business}</td>
//     <td>{props.flights.First}</td>
//     <td>{props.flights.Arrival.substring(0,10)}</td>
//     <td>{props.flights.Arrival.substring(11,16)}</td>
//     <td>{props.flights.Departure.substring(0,10)}</td>
//     <td>{props.flights.Departure.substring(11,16)}</td>
//     <td>
//       <Link to={"/AdminHomePage/edit/"+props.flights._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFlights(props.flights._id) }}>delete</a>
//     </td>
//   </tr>
// )


export default class EditFlight extends Component {
  constructor(props) {
    super(props);
      
       
      
      
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeArrival = this.onChangeArrival.bind(this);
    this.onChangeDeparture = this.onChangeDeparture.bind(this);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeEconomy = this.onChangeEconomy.bind(this);
    this.onChangeBusiness = this.onChangeBusiness.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      From: '',
      To: '',
      Date: null ,
      Arrival: null ,
      Departure: null ,
      Economy:0 ,
      Business: 0,
      First:0
     
    }

  }

  componentDidMount() {
    
   
    // axios.get('http://localhost:5000/AdminHome/'+ useParams.id)
    //   .then(response => {
    //     this.setState({
    //       From: response.data.From,
    //       To: response.data.To,
    //       Date: response.data.Date,
    //       Arrival: response.data.Arrival,
    //       Departure: response.data.Departure,
    //       Economy:response.data.Economy,
    //       Business: response.data.Business,
    //       First: response.data.First
    //     })   
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
      

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeFrom(e) {
    this.setState({
      From: e.target.value
    })
  }

  onChangeTo(e) {
    this.setState({
      To: e.target.value
    })
  }
  onChangeFirst(e) {
    this.setState({
        First: e.target.value
    })
  }
  onChangeBusiness(e) {
    this.setState({
        Business: e.target.value
    })
  }
  onChangeEconomy(e) {
    this.setState({
        Economy: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      Date: date
    })
    // console.log(date);
  }
  onChangeArrival(date) {
    this.setState({
        Arrival: date
    })
    // console.log(date);
  }
  onChangeDeparture(date) {
    this.setState({
        Departure: date
    })
    console.log(date);
  }

  onSubmit(e) {
    e.preventDefault();

    const flight = {
      From: this.state.From,
          To: this.state.To,
          Date: this.state.Date ,
          Arrival: this.state.Arrival,
          Departure: this.state.Departure,
          Economy:this.state.Economy,
          Business: this.state.Business,
          First: this.state.First,
          _ID: window.location.pathname.substring(20)
    }

    console.log(flight);
   

   axios.post('http://localhost:5000/AdminHome/EditFlight/' + window.location.pathname.substring(20), flight)
      .then(res => console.log(res.data));
      console.log("Hisss")
   window.location = '/AdminHomePage/flightsList';
  }

  render() {
    return (
      
     
      <div className="container">
      <h3>Edit Flight</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>From: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.From}
              onChange={this.onChangeFrom}
              placeholder = {"hi"}
              />
        </div>
        <div className="form-group"> 
          <label>To :  </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.To}
              onChange={this.onChangeTo}
              />
        </div>
        <div className="form-group">
          <label>Date :  </label>
          <div>
            <DatePicker
              selected={this.state.Date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Arrival :  </label>
          <DateTimePicker
            onChange={this.onChangeArrival}
            value={this.state.Arrival}
            />
        </div>
        <div className="form-group">
          <label>Departure :  </label>
          <DateTimePicker
            onChange={this.onChangeDeparture}
            value={this.state.Departure}
            />
        </div>
        <div className="form-group">
          <label>Economy :  </label>
          <input 
              type="int" 
              className="form-control"
              value={this.state.Economy}
              onChange={this.onChangeEconomy}
              />
        </div>
        <div className="form-group">
          <label>Business :  </label>
          <input 
              type="int" 
              className="form-control"
              value={this.state.Business}
              onChange={this.onChangeBusiness}
              />
        </div>
        <div className="form-group">
          <label>First :  </label>
          <input 
              type="int" 
              className="form-control"
              value={this.state.First}
              onChange={this.onChangeFirst}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Update Flight" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}