import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import LoginPage from "./components/Login/LoginPage.tsx";
import DashboardPage from "./components/Dashboard/DashboardPage.tsx";
import TodoList, { TodoForm } from "./components/Todo/TodoList.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";
import TodoProvider from "./context/TodosContext.tsx";
import logo from './logo.svg';

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };
  return (<AuthProvider>

    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
      <Route exact path="/" >
        <div className="main">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="primary" onClick={handleClick}>
            To Login
          </button>
        </div>
      </Route>
    </Switch>
  </AuthProvider>
  );

}


export default withRouter(App);
