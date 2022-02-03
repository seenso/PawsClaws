import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications"
import AdoptablePets from "./AdoptablePets";

export default function ApplicantPortal({ currentUser, applications }) {
  //filter applications for current user
  // usersApps = applications.filter(app => app.applicant_id === currentUser.id);
  
  return (
    <div id="applicant_portal">
       <Switch>
        <Route exact path='/applicantportal'>
          <Applications currentUser={currentUser}/>
        </Route>
        <Route path="/applicantportal/adoptablepets">
          <AdoptablePets />
        </Route>
      </Switch>
    </div>
  )
}