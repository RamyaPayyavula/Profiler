import React from "react";
import facebook from "../src/assets/facebook.png";
import gmail from "../src/assets/mail.png";
import twitter from "../src/assets/twitter.png";
import phone from "../src/assets/phone.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img src={gmail} />
        <img src={phone} />
        <img src={facebook} />
        <img src={twitter} />
      </div>
    );
  }
}

export default Footer;
