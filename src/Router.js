import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;