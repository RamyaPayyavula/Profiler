import React from "react";

export class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container service-container">
          <h1>Professional Organizations</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2020 - Present</p>
                <p>Member of The American Ceramic Society</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2020 - Present</p>
                <p>Member of American Chemical Society</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2020 - Present</p>
                <p>Member of American Vacuum Society</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-alignment-container service-container ">
          <h1>University Service</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2017 - Present</p>
                <p>
                  Serving as a graduate teaching assistant at the Department of
                  Chemistry, UMKC
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2018 - Present</p>
                <p>
                  Serving as an international student ambassador at
                  International Student Affairs Office (ISAO), UMKC.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2018 - Present</p>
                <p>
                  Serving as an undergraduate student advisor for research in
                  Oyler’s research group
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="list-alignment-container service-container">
          <h1>Community Service</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2017 - Present</p>
                <p>
                  Member of Sri Sathya Sai spiritual center of Kansas. I
                  participate in a devotional sojourn every week along with our
                  community.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2017 - Present</p>
                <p>
                  Member of volunteer group that participate Harvester’s
                  outreach program at Kansas City.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019 - Present</p>
                <p>
                  I act as the President of UMKC Volleyball Unites the World
                  (VUW) Roo group. The group hosts volleyball, physical
                  activities and social gathering every week for UMKC students
                  to promote physical/mental well-being.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Service;
