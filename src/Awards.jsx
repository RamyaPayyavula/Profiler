import React from "react";

export class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container publications">
          <h1>Awards &amp; Scholarship</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <div>
                  <p>
                    <strong>International Student Ambassador Fellowship</strong>
                  </p>
                  <p>University of Missouri – Kansas City, Kansas City, USA.</p>
                </div>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2018</p>
                <div>
                  <p>
                    <strong>Graduate Research Assistantship</strong>
                  </p>
                  <p>
                    Department of Chemistry, University of Missouri – Kansas
                    City Kansas City, USA.
                  </p>
                </div>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2017</p>
                <div>
                  <p>
                    <strong>
                      International Graduate Teaching Certification
                    </strong>
                  </p>
                  <p>
                    School of Graduate Studies, University of Missouri – Kansas
                    City Kansas City, USA.
                  </p>
                </div>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2016</p>
                <div>
                  <p>
                    <strong>Research Assistantship</strong>
                  </p>
                  <p>
                    Nuclear Magnetic Resonance Research Center, Indian Institute
                    of Science, India.
                  </p>
                </div>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2015</p>
                <div>
                  <p>
                    <strong>Summer Research Fellowship</strong>
                  </p>
                  <p>
                    India Academy of Sciences, Jawaharlal Nehru Center for
                    Advanced Scientific Research, India.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Awards;
