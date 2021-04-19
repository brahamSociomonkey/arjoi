import React from "react";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { About } from "./Pages/About";
import ScrollToTop from "./Utilities/ScrollToTop";

const Main = () => {
  return (
    <main>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
