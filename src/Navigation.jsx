import React from "react";
import Home from "../src/Home";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="header-container">
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/education"}>Education</Link>
            </li>
            <li>
              <Link to={"/research"}>Research</Link>
            </li>
            <li>
              <Link to={"/teaching"}>Teaching</Link>
            </li>
            <li>
              <Link to={"/professional-activities"}>
                Professional Activities
              </Link>
            </li>
            <li>
              <Link to={"/accolades"}>Accolades</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="header">
          <div className="header-drops"></div>
        </div> */}
      </div>
    );
  }
}

export default Navigation;
