import React from "react";
import { Link } from "react-router-dom";

export class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeDropDownMenu = this.closeDropDownMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    this.setState({ isOpen: true }, () => {
      document.addEventListener("click", this.closeDropDownMenu);
    });
  }

  closeDropDownMenu() {
    this.setState({ isOpen: false }, () => {
      document.removeEventListener("click", this.closeDropDownMenu);
    });
  }
  renderDropDown() {
    const { dropDownList } = this.props;
    console.log("rendering dorp");
    return (
      <div className="dropdown-container">
        <ul className="dropdown">
          {dropDownList.map((item) => (
            <li key={item.lable}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  render() {
    const { header, showIcon } = this.props;
    const { isOpen } = this.state;
    const customId = isOpen ? "triangle-up" : "triangle-down";
    console.log("coming up here");
    return (
      <div className="dropdown-wrapper">
        <div className="dropdown-header" onClick={this.showMenu}>
          {header}
          {showIcon ? <div id={customId} /> : null}
        </div>
        {isOpen ? this.renderDropDown() : null}
      </div>
    );
  }
}

export default DropDown;
