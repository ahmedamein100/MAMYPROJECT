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
import SearchResult from './components/searchResult';
import Home from './components/HomePage';

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
      <Route
      path = "/AdminHomePage" element = {<AdminHomePage/>}
      />
      <Route path="/AdminHomePage/flightsList" element={<FlightsList/>} />
      <Route path="/AdminHomePage/Addflight/" element = {<Addflight/>} />
      
      <Route path="/AdminHomePage/edit/:id" element = {<EditFlights/>} />
      <Route path="/AdminHomePage/search/" element = {<Search/>} />
      {/* <Route path="/AdminHomePage/searchResult/" element = {<SearchResult/>} /> */}
      </Routes>
     
    </BrowserRouter>
 ,
 rootElement
);


