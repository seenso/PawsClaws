import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import HomeNavBar from "./components/HomeNavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdoptablePets from "./components/AdoptablePets";
import Portal from "./components/Portal";
import Login from "./components/Login";
import ApplicantSignUp from "./components/ApplicantSignUp";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/pets")
    .then(r=>r.json())
    .then(pets => setPets(pets))
  }, [])

  return (
    <div className="App">
      <HomeNavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/adoptablepets">
          <AdoptablePets pets={pets}/>
        </Route>
        <Route exact path="/homeportal">
          <Portal />
        </Route>
        <Route exact path="/homeportal/login">
          <Login />
        </Route>
        <Route exact path="/homeportal/signup">
          <ApplicantSignUp />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
