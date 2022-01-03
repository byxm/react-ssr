import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </div>
);
