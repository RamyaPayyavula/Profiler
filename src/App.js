import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../src/Home";
import Publications from "./Publications";
import Courses from "./Courses";
import Labs from "./Labs";
import Conference from "./Conference";
import Meetings from "./Meetings";
import Resume from "./Resume";
import Advising from "./Advising";
import Training from "./Training";
import Awards from "./Awards";
import Grants from "./Grants";
import Scholarships from "./Scholarships";
import memberships, { Memberships } from "./Memberships";
import CommunityService from "./CommunityService";
import UniversityService from "./UniversityService";

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
              <Route path="/courses" component={Courses} />
              <Route path="/labs" component={Labs} />
              <Route path="/publications" component={Publications} />
              <Route path="/conference" component={Conference} />
              <Route path="/resume" component={Resume} />
              <Route path="/meetings" component={Meetings} />
              <Route path="/advising" component={Advising} />
              <Route path="/training" component={Training} />
              <Route path="/scholarships" component={Scholarships} />
              <Route path="/grants" component={Grants} />
              <Route path="/memberships" component={Memberships} />
              <Route path="/university-service" component={UniversityService} />
              <Route path="/community-service" component={CommunityService} />
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
