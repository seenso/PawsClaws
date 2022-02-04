import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import ApplicantSignUp from "./ApplicantSignUp";

export default function Portal({ setCurrentUser}) {
  
  return (
    <div id="portal">
      <Switch>
        <Route exact path='/homeportal/'>
          <ApplicantSignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/homeportal/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path="/homeportal/signup">
          <ApplicantSignUp setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </div>
  )
}