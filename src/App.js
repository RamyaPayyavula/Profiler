import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../src/Home";
import Protofolio from "../src/Protofolio";

export const App = () => {
  return (
    <Router>
      <div>
        <div id="parent-div">
          <div className="main-container">
            <Navigation></Navigation>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/home" component={Home} />
              <Route path="/education" component={Protofolio} />
              <Route path="/research" component={Protofolio} />
              <Route path="/teaching" component={Protofolio} />
              <Route path="/professional-activities" component={Protofolio} />
              <Route path="/accolades" component={Protofolio} />
              <Route component={Error} />
            </Switch>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Router>
  );
};
render(<App />, document.getElementById("root"));
