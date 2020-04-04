import React from "react";
import Home from "../src/Home";

class Navigation extends React.Component {
  render() {
    return (
      <div className="header-container">
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="default.asp">Home</a>
            </li>
            <li>
              <a href="news.asp">Education</a>
            </li>
            <li>
              <a href="about.asp">Research</a>
            </li>
            <li>
              <a href="about.asp">Teaching</a>
            </li>
            <li>
              <a href="about.asp">Professional Activities</a>
            </li>
            <li>
              <a href="about.asp">Accolades</a>
            </li>
          </ul>
        </nav>
        <div className="header">
          <div className="header-drops"></div>
        </div>
      </div>
    );
  }
}

export default Navigation;
