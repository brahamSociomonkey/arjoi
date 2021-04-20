import React from "react";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import ScrollToTop from "./Utilities/ScrollToTop";
import RealEstate from "./Pages/Businesses/RealEstate";
import Retail from "./Pages/Businesses/Retail";
import Community from "./Pages/Businesses/Community";

const Main = () => {
  return (
    <main>
      <ScrollToTop />

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/business/realestate" component={RealEstate} />
        <Route exact path="/business/retail" component={Retail} />
        <Route exact path="/business/community" component={Community} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
