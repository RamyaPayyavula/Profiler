import React from "react";
import linkedin from "../src/assets/linkedin.png";
import scholar from "../src/assets/scholar.png";
import orcid from "../src/assets/orcid.png";
import researchgate from "../src/assets/researchgate.png";
import github from "../src/assets/github.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/sai-siva-kumar-kumar-108b67175"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=c0_cdT4AAAAJ&hl=en"
          target="_blank"
        >
          <img src={scholar} alt="google cholar" />
        </a>
        <a href="https://orcid.org/0000-0002-5752-2585" target="_blank">
          <img src={orcid} alt="orcid" />
        </a>
        <a
          href="https://www.researchgate.net/profile/Sai_Siva_Kumar_P"
          target="_blank"
        >
          <img src={researchgate} alt="research gate" />
        </a>
        <a href="https://github.com/saisivakumarp/Profile" target="_blank">
          <img src={github} alt="github" />
        </a>
      </div>
    );
  }
}

export default Footer;
