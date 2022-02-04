import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Applications from "./Applications";
import AdoptablePets from "./AdoptablePets";



export default function ApplicantPortal({ currentUser, pets, applications }) {
  return (
    <div id="applicant_portal">
      THIS IS THE APPLICANT PORTAL COMPONENT
      <Switch>
          <Route exact path="/applicantportal">
            <Applications />
          </Route>
          <Route exact path="/applicantportal/adoptablepets">
            <AdoptablePets pets={pets}/>
          </Route>
        </Switch> 
    </div>
  )
}