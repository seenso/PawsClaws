import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeNavBar from "./components/HomeNavBar";
import ApplicantNavBar from "./components/ApplicantNavBar"
import Portal from "./components/Portal";
import ApplicantPortal from "./components/ApplicantPortal";
import Login from "./components/Login";
import ApplicantSignUp from "./components/ApplicantSignUp";
import Applications from "./components/Applications";
import ApplicantAdoptForm from "./components/ApplicantAdoptForm";
import AdoptablePets from "./components/AdoptablePets";

function App() {
  const [currentUser, setCurrentUser] = useState({}); // obj is a truthy val
  const [pets, setPets] = useState([]);
  const [applications, setApplications] = useState([]);
  const [portal, setPortal] = useState("Home");

  //auto-login for existing users
  useEffect(() => {
    fetch("/me") // "/auth" in Ix's lecture - https://learning.flatironschool.com/courses/4552/pages/video-authorization-client?module_item_id=346181
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [portal])

  // set pets
  useEffect(() => {
    fetch("/pets")
    .then(r=>r.json())
    .then(pets => setPets(pets))
  }, [])
  // set applications
  useEffect(() => {
    fetch("/pet_applications")
    .then(r=>r.json())
    .then(apps => setApplications(apps))
  }, [])

  function handleLogOut() {
    //set portal to "Home" & delete session.
    setPortal("Home");
    setCurrentUser({});
    console.log("Logged Out!")
  }


console.log("CURRENT USER IN APP", currentUser)

  if (portal === "Home") {
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
            {/* the homeportal lets applicants register/log in  */}
            <Portal setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/homeportal/login">
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/homeportal/signup">
            <ApplicantSignUp setCurrentUser={setCurrentUser} setPortal={setPortal}/>
          </Route>
        </Switch> 

        <Footer />
      </div>
    );

  } else if (portal === "Applicant") {
    return (
      <div className="App">
        <ApplicantNavBar currentUser={currentUser} handleLogOut={handleLogOut}/>

        <Switch>
          <Route exact path="/applicantportal">
            <ApplicantPortal currentUser={currentUser} applications={applications}/>
          </Route>
          <Route exact path="/applicantportal/adoptablepets">
            <AdoptablePets pets={pets}/>
          </Route>
        </Switch> 
    
        <Footer />
      </div>
    );
  } else if (portal === "Foster") {

  } else if (portal === "Admin") {

  }


}

export default App;
