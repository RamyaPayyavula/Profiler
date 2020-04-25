import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../src/utils/DropDown";
// import pic from "./assets/navicon.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
    this.renderDesktopNavigation = this.renderDesktopNavigation.bind(this);
    this.renderMobileNavigation = this.renderMobileNavigation.bind(this);
    // this.showMobileMenu = this.showMobileMenu.bind(this);
    // this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  // showMobileMenu(event) {
  //   console.log("here");
  //   event.preventDefault();
  //   this.setState({ isMobileMenuOpen: true }, () => {
  //     document.addEventListener("click", this.closeMobileMenu);
  //   });
  // }

  // closeMobileMenu() {
  //   this.setState({ isMobileMenuOpen: false }, () => {
  //     document.removeEventListener("click", this.closeMobileMenu);
  //   });
  // }

  renderDesktopNavigation() {
    const teachingDropDownList = [
      { label: "Courses", link: "/courses" },
      { label: "Labs", link: "/labs" },
    ];

    const researchDropDownList = [
      { label: "Publications", link: "/publications" },
      { label: "Conference", link: "/conference" },
      { label: "Resume", link: "/resume" },
    ];

    const activitiesDropDownList = [
      {
        label: "Professional meetings",
        link: "/meetings",
      },
      {
        label: "Student advising",
        link: "/advising",
      },
      { label: "professional training", link: "/training" },
    ];

    const accoladesDropDownList = [
      { label: "Awards", link: "/awards" },
      { label: "Scholarships", link: "/scholarships" },
      { label: "Grants", link: "/grants" },
      { label: "Memberships", link: "/memberships" },
    ];

    const serviceDropDownList = [
      { label: "University Service", link: "/university-service" },
      { label: "Community Service", link: "/community-service" },
    ];
    const customClassName =
      this.state.height > 720 ? "desktop-nav-bar-list" : "mobile-nav-bar-list";
    return (
      <ul className={customClassName}>
        <li className="list-item">
          <Link to={"/home"} className="dropdown-wrapper">
            Home
          </Link>
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={teachingDropDownList}
            header="Teaching"
            showIcon={false}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={researchDropDownList}
            header="Research"
            showIcon={false}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={activitiesDropDownList}
            header="Professional Activities"
            showIcon={false}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={accoladesDropDownList}
            header="Accolades"
            showIcon={false}
          />
        </li>
        <li className="list-item">
          <DropDown
            dropDownList={serviceDropDownList}
            header="Service"
            showIcon={false}
          />
        </li>
      </ul>
    );
  }

  renderMobileNavigation() {
    return (
      <div className="mobile-nav-menu-container">
        <div
          className="mobile-nav-menu"
          onClick={() =>
            this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen })
          }
        ></div>
        {this.state.isMobileMenuOpen ? this.renderDesktopNavigation() : null}
      </div>
    );
  }

  render() {
    return (
      <div className="header-container">
        <nav className="nav-bar">
          {this.state.height > 720
            ? this.renderDesktopNavigation()
            : this.renderMobileNavigation()}
        </nav>
      </div>
    );
  }
}

export default Navigation;
