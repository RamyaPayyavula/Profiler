import React from "react";

export class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container publications">
          <h1>Graduate Students</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2017</p>
                <article>
                  Sai Siva Kumar Pinnepalli, Department of Chemistry
                </article>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-alignment-container publications">
          <h1>Undergraduate Students</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <article>
                  Christopher W. Burkett, Department of Chemistry
                </article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2018</p>
                <article>Michael Wiles, Department of Chemistry</article>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-alignment-container publications">
          <h1>Project SEED students (High School Summer Program) </h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2020</p>
                <article>Boohar Wade</article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <article>Dominic A. Torre</article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2018</p>
                <article>Riley Keyes</article>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default People;
