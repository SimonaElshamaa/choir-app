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

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
