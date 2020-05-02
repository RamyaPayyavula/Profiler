import React from "react";

export class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container publications">
          <h1>Professional Training</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2020</p>
                <p>
                  Summer virtual school on ‘Neutron/X-ray diffraction methods’
                  organized by Oak Ridge National Laboratory/Argonne National
                  Laboratory, United States. June, 15, 2020 – June 26, 2020.
                </p>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2020</p>
                <p>
                  Summer school on ‘General Theory of Nuclear Magnetic Resonance
                  Part I’ organized by University of Leipzig at Windischleuba,
                  Leipzig, Germany. February 23, 2020 – February 29, 2020.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-alignment-container publications">
          <h1>Professional Meetings</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <article>
                  Frontiers in Materials Science, Jawaharlal Nehru Center for
                  Advanced Scientific Research. December 2-6. Bangalore, India.
                </article>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <article>
                  American Vacuum Society 66th International Symposium &amp;
                  Exhibition. October 20-25. Columbus, Ohio, USA.
                </article>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2016</p>
                <article>
                  Integrated Chemie Conference on Frontiers in Applied
                  Chemistry-From Molecules to Materials, February 12-13, Dept.
                  of Chemistry, SSSIHL, India.
                </article>
              </div>

              <div className="sub-container">
                <p className="sub-heading">2015</p>
                <p>
                  International Symposium on Computational Science, December
                  12-15, Dept. of Mathematics, SSSIHL, India.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2014</p>
                <p>
                  International Conference on Frontiers in Nano Science,
                  Technology and Applications, December 20- 22, Dept. of
                  Physics, SSSIHL, India.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="list-alignment-container publications">
          <h1>Professional Meetings</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Hazardous material handling training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Chemical disposal and safety Training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Laser safety training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Laser Electrical safety training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Radiofrequency safety training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Cryogen safety training</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <p>Power tools safety training</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Activities;
