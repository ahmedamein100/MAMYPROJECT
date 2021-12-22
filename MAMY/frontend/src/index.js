import React from 'react';

import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./components/login"
import AdminHomePage from "./components/AdminHomePage"
import FlightsList from "./components/flightsList"
import EditFlights from "./components/EditFlight"
import Addflight from './components/Addflight';
import Search from './components/search';
import UserSearch from './components/userSearch';
import SearchResult from './components/searchResult';
import Home from './components/HomePage';
import UserLogin from './components/userLogin';
import UserSignUp from './components/userSignUp';
import UserHomePage from "./components/UserHomePage"
import SelectedFlight from "./components/SelectedFlight"
import SelectedReturnFlight from "./components/SelectedReturnFlight"
import ReturnFlights from "./components/returnFlights"
import Summary from "./components/Summary"
import DepSeats from "./components/DepSeats"
import DepSeats2 from "./components/DepSeats2"
import Confirm from "./components/Confirm";
import ReservationList from "./components/reservationList";
import Edituser from './components/EditUser';

const rootElement = document.getElementById("root");

render(
  
    <BrowserRouter>
    <Routes> 
    <Route
      path = "/" element = {<Home/>}
      />
     <Route
      path = "/login" element = {<Login/>}
      />
      <Route path="/UserHomePage/editUser/:id" element = {<Edituser/>} />
      <Route path="/userLogin" element = {<UserLogin/>} />
      <Route path="/userSignUp/" element = {<UserSignUp/>} />
      <Route path ="/AdminHomePage" element = {<AdminHomePage/>}/>
      <Route path ="/UserHomePage/:id" element = {<UserHomePage/>}/>
      <Route path="/AdminHomePage/flightsList" element={<FlightsList/>} />
      <Route path="/AdminHomePage/Addflight/" element = {<Addflight/>} />
      
      <Route path="/AdminHomePage/edit/:id" element = {<EditFlights/>} />
      <Route path="/AdminHomePage/search/" element = {<Search/>} />
      <Route path="/UserHomePage/userSearch/:id" element = {<UserSearch/>} />
      <Route path="/UserHomePage/SelectedFlight/:id" element = {<SelectedFlight/>} />
      <Route path="/UserHomePage/SelectedReturnFlight/:id" element = {<SelectedReturnFlight/>} />

      <Route path="/UserHomePage/returnFlights/:id" element={<ReturnFlights/>} />
      <Route path="/UserHomePage/Summary/:id" element={<Summary/>} />
      <Route path="/UserHomePage/DepSeats/:id" element={<DepSeats/>} />
      <Route path="/UserHomePage/DepSeats2/:id" element={<DepSeats2/>} />
      <Route path="/UserHomePage/Confirm/:id" element={<Confirm/>} />
      <Route path="/UserHomePage/reservationList/:id" element={<ReservationList/>} />

      


      {/* <Route path="/AdminHomePage/searchResult/" element = {<SearchResult/>} /> */}
      </Routes>
     
    </BrowserRouter>
 ,
 rootElement
);


