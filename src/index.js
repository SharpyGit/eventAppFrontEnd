import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfilePage from "./views/profile/ProfilePage";
import RegistrationPage from "./views/registration/RegistrationPage";
import SignInPage from "./views/sign-in/SignInPage";

import reportWebVitals from "./reportWebVitals";

const routes = () => (
  <Router>
    <Switch>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/registration">
        <RegistrationPage />
      </Route>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>{routes()}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
