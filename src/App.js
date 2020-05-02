import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../src/Home";
import Courses from "./Courses";
import Philosophy from "./Philosophy";
import Activities from "./Activities";
import Awards from "./Awards";
import Grants from "./Grants";
import Gallery from "./Gallery";
import Service from "./Service";
import { Provider } from "react-redux";
import rootReducer from "../src/Reducer";
import screenResize from "../src/Actions";
import Interests from "./Interests";
import People from "./People";
import Publications from "./Publications";

const store = createStore(rootReducer);

window.addEventListener("resize", () => {
  store.dispatch(
    screenResize(window.innerWidth, window.innerHeight, window.innerWidth < 720)
  );
});

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
              <Route path="/philosophy" component={Philosophy} />
              <Route path="/interests" component={Interests} />
              <Route path="/publications" component={Publications} />
              <Route path="/people" component={People} />
              <Route path="/activities" component={Activities} />
              <Route path="/grants" component={Grants} />
              <Route path="/awards" component={Awards} />
              <Route path="/service" component={Service} />
              <Route path="/gallery" component={Gallery} />
              <Route component={Error} />
            </Switch>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Router>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
