import React from "react";
import pic from "../src/assets/profilepic.jpg";
import { connect } from "react-redux";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-container">
        <div className="profile-info">
          <div className="profile-desc">
            <img src={pic} className="profile-pic" />
            <p className="heading">Sai Siva Kumar Pinnepalli</p>
            <p>University of Missouri-Kansas City</p>
            <p>School of Biological and Chemical Sciences</p>
            <p>Department of Chemistry</p>
            <p>5110 Rockhill Road 203 Falrsheim Hall</p>
            <p>Kansas City, Missouri, 64410, USA</p>
            <br />
            <p>Phone: 816-517-6530</p>
            <p>Email: spthb@mail.umkc.edu</p>
            <br />
            <a>Curriculum Vitae</a>
          </div>
          <div className="profile-bio">
            <p className="heading">Bio-Overview: </p>
            <article>
              Sai Siva Kumar is a doctoral student in Oyler’s research group and
              serves as a graduate teaching assistant for physical chemistry
              laboratory course at Department of Chemistry, UMKC. He also serves
              at the capacity of international student ambassador at
              international student affairs office (ISAO), UMKC. He received his
              bachelor’s (2014) and master’s degrees (2016) in chemistry from
              Sri Sathya Sai Institute of Higher Learning, India. Alongside his
              doctoral program, he has enrolled in ‘preparing future faculty’
              program since 2018. His research areas of interest include
              material synthesis, thin-film deposition, solid-state NMR and
              other spectroscopies. To his credit, he taught several
              undergraduate laboratory courses, published over five research
              papers and deliver talks at several symposia. He believes in
              student-centered and experiential learning; and hopes to integrate
              research in teaching methodology.
            </article>
            <p className="heading">Degrees Earned: </p>
            <article>
              <ul>
                <li>2022 Doctoral of Philosophy in Chemistry, UMKC, US</li>
                <li>2020 Preparing Future Faculty Certification, UMKC, US</li>
                <li>
                  2016 MSc., Chemistry, Sri Sathya Sai Institute of Higher
                  Learning, India.
                </li>
                <li>
                  2014 B.Sc., Chemistry, Sri Sathya Sai Institute of Higher
                  Learning, India
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    isMobile: state.isMobile,
  };
}

export default connect(mapStateToProps)(Home);
