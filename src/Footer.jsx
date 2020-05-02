import React from "react";
import facebook from "../src/assets/facebook.png";
import gmail from "../src/assets/mail.png";
import twitter from "../src/assets/twitter.png";
import phone from "../src/assets/phone.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {/* <img src={gmail} alt="gmail" />
        <img src={phone} alt="phone" /> */}

        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </div>
    );
  }
}

export default Footer;
