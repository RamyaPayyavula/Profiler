import React from "react";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../src/Home";

export const App = () => {
  return (
    <div id="parent-div">
      <div className="main-container">
        <Navigation></Navigation>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
};
render(<App />, document.getElementById("root"));
