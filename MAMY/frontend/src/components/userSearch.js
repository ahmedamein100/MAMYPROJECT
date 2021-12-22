import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { withRouter } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';


const Flights = props => (
  <tr>
    <td>{props.flights.From}</td>
    <td>{props.flights.To}</td>
    <td>{props.flights.Arrival.substring(0,10)}</td>
    <td>{props.flights.Departure.substring(0,10)}</td>
    <td>
    <Link to={"/UserHomePage/SelectedFlight/"+(window.location.pathname.substring(25,25+24))+"&"+props.flights._id+"&"+props.CabinClass+"&"+props.NumberofPassengers}>Select</Link>
    </td>
  </tr>
)
{/* <Link to={"/UserHomePage/SelectedFlight/"+props.flights._id+"&"+props.CabinClass}>Select</Link> */}


export default class userSearch extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeNumberofPassengers = this.onChangeNumberofPassengers.bind(this);
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeArrival = this.onChangeArrival.bind(this);
    this.onChangeDeparture = this.onChangeDeparture.bind(this);
    this.onChangeCabinClass = this.onChangeCabinClass .bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      From: "",
      To: "",
      NumberofPassengers: -1 ,
      Arrival: null ,
      Departure: null ,
      CabinClass:"",
      flightSearched:[],
      flights:[]
    }

  }

  onChangeFrom(e) {
    this.setState({
      From: e.target.value,
     
    })
  }

  onChangeTo(e) {
    this.setState({
      To: e.target.value
    })
  }
  onChangeNumberofPassengers(e) {
    this.setState({
        NumberofPassengers: e.target.value
    })
  }
  onChangeCabinClass(e) {
    this.setState({
        CabinClass: e.target.value
    })
    
  }

  onChangeArrival(date) {
    this.setState({
        Arrival: date
    })
    
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
      From: this.state.To,
          To: this.state.From,
          Arrival: this.state.Arrival,
          Departure: this.state.Departure,
          CabinClass:this.state.CabinClass,
          NumberofPassengers:Number(this.state.NumberofPassengers)
          
    }

    console.log(flight);
   

   axios.post('http://localhost:5000/UserHomePage/searchFlights', flight)
      .then(res => this.setState({flightSearched : res.data} ));
      console.log(this.state.flightSearched)
 
  
  }




  flightsResult() {
    return this.state.flightSearched.map(currentflight => {
      return <Flights flights={currentflight} selectFlights={this.selectFlights} key={currentflight._id} CabinClass={this.state.CabinClass} NumberofPassengers={this.state.NumberofPassengers} />;
    }
    )
  }


  render() {
    return (
      <div>
        
        <div className="container">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to={"/UserHomePage/"+window.location.pathname.substring(25,49)} className="navbar-brand">FSR</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li><Link to={"/UserHomePage/userSearch/"+window.location.pathname.substring(25,49)} className="nav-link">Search</Link></li>
        <li><Link to={"/UserHomePage/reservationList/"+(window.location.pathname.substring(25,49))} className="nav-link">Reservations</Link></li>
        <li><Link to={"/UserHomePage/editUser/"+(window.location.pathname.substring(25,49))} className="nav-link">Edit Personal Information</Link></li>

        </ul>
        </div>
      </nav>
      </div>

      <div className="container">
      <h3>Available Departure Flights</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>From: </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.From}
              onChange={this.onChangeFrom}
              />
        </div>
        <div className="form-group"> 
          <label>To :  </label>
          <input  type="text"
              
              className="form-control"
              value={this.state.To}
              onChange={this.onChangeTo}
              />
        </div>
        
        <div className="form-group">
          <label>Arrival :  </label>
          <DatePicker
            selected={this.state.Arrival}
            onChange={this.onChangeArrival}
            />
        </div>
        <div className="form-group">
          <label>Departure :  </label>
          <DatePicker
            selected={this.state.Departure}
            onChange={this.onChangeDeparture}
            />
        </div>
        <br></br>
        <div className="form-group">
        <label>Cabin Class :  </label>
        <br></br>
            <select name="choice" onChange={this.onChangeCabinClass}>
            <option value=""  >Choose Class</option>
            <option value="1"  >Bussiness Class</option>
            <option value="2"   >First Class</option>
            <option value="3"   >Economy Class</option>
            </select>
        </div>
        <br></br>
        <div className="form-group">
          <label>Number of Passengers :  </label>
          <input 
            required
              type="int" 
              className="form-control"
              onChange={this.onChangeNumberofPassengers}
              />
        </div>
        <br></br>
        <div>
          <div className="form-group">
            <input type="submit" value="Search Flight" className="btn btn-primary" />
          </div>
         
        </div>
      </form>

      <div className= "" >
      <h3>Flights Result</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Arrival Date</th>
            <th>Departure Date</th>
            
           
          </tr>
        </thead>
        <tbody>
          { this.flightsResult() }
        </tbody>
      </table>
      </div>
    </div>
</div>
      




    )
  }
}