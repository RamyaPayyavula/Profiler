import React from "react";

export class Grants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container publications">
          <h1>Grants</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2020</p>
                <p>
                  International society of magnetic resonance (ISMAR) provided
                  travel grant to attend summer school on NMR in Germany.{" "}
                  <strong>420 EUR</strong>
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>
                  Mail-in beamtime proposal to carry out neutron diffraction
                  experiments with Nanoscale-Ordered Materials Diffractometer
                  (NOMAD) at Oak Ridge National Laboratory is accepted.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Grants;
