import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// core components
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";
import Login from "./views/Login";
import Register from "./views/Register";
import { HistoryWarpper } from "./utils/history";

import "./assets/css/material-dashboard-react.css?v=1.10.0";

import "./App.css";

const history = createBrowserHistory();
HistoryWarpper.setHistory(history);

const renderComponent=(Component)=>()=>{
  if(!localStorage.getItem("login")){
    if(Component === Register){
      history.push("/register");
      return <Register />;
    }
    history.push("/login");
    return <Login />;
  }else if(localStorage.getItem("login") && 
  (Component === Login || Component === Register)){
    history.push("/admin/dashboard");
    return <Admin />;
  }else{
    return <Component />;
  }
}

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" render={renderComponent(Login)} />
          <Route path="/register" render={renderComponent(Register)} />
          <Route path="/admin" render={renderComponent(Admin)} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
