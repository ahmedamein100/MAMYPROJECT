import React from 'react';
import { BrowserRouter as Routes, Link, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import AdminHomePage from "./components/AdminHomePage";
import FlightsList from "./components/flightsList";
import EditFlights from "./components/EditFlight";
import Addflight from './components/Addflight';
import Search from './components/search';
import SearchResult from './components/searchResult';
import Home from './components/HomePage';
import { Button } from 'bootstrap';

function App() {
  
 
  return (


    

    <Routes>
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/AdminHomePage/Addflight" exact component={Addflight} />
      <Route path="/AdminHomePage" exact component={AdminHomePage} />
      <Route path="/AdminHomePage/flightsList" exact component={FlightsList} />
      <Route path="/AdminHomePage/edit/:id" exact component={EditFlights} />
      <Route path="/AdminHomePage/search/" exact component={Search} />
      <Route path="/AdminHomePage/searchResult/" exact component={SearchResult} />
    </Routes>
  );
}

export default App;
