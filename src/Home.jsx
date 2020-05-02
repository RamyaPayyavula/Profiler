import React from "react";
import pic from "../src/assets/profilepic.jpg";
import Sai_Pinnepalli_CV from "../src/docs/Sai_Pinnepalli_CV.pdf";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container app-container">
        <div className="profile-desc">
          <img src={pic} className="profile-pic" alt="profile pic" />
          <h1>Sai Siva Kumar Pinnepalli</h1>
          <p>University of Missouri-Kansas City</p>
          <p>School of Biological &amp; Chemical Sciences</p>
          <p>Department of Chemistry</p>
          <p>5110 Rockhill Road</p>
          <p>203 Falrsheim Hall</p>
          <p>Kansas City, Missouri, 64410, USA</p>
          <p>Email: spthb@mail.umkc.edu</p>
          <br />
          <a href={Sai_Pinnepalli_CV}>Curriculum Vitae</a>
        </div>
        <div className="profile-bio">
          <h1>Bio-Overview</h1>
          <article>
            Sai Siva Kumar is a doctoral student in Oyler’s research group and
            serves as a graduate teaching assistant for physical chemistry
            laboratory course at Department of Chemistry, UMKC. He also serves
            at the capacity of international student ambassador at international
            student affairs office (ISAO), UMKC. He received his bachelor’s
            (2014) and master’s degrees (2016) in chemistry from Sri Sathya Sai
            Institute of Higher Learning, India. Alongside his doctoral program,
            he has enrolled in ‘preparing future faculty’ program since 2018.
            His research areas of interest include material synthesis, thin-film
            deposition, solid-state NMR and other spectroscopies. To his credit,
            he taught several undergraduate laboratory courses, published over
            five research papers and deliver talks at several symposia. He
            believes in student-centered and experiential learning; and hopes to
            integrate research in teaching methodology.
          </article>
          <div className="list-alignment-container padding-top-24">
            <h1>Degrees Earned</h1>
            <ul>
              <li>
                <div className="sub-container">
                  <p className="sub-heading">2022</p>
                  <div>
                    <p>
                      <strong>Interdisciplinary PhD, Chemistry</strong>
                    </p>
                    <p>
                      Department of Chemistry, University of Missouri – Kansas
                      City, Kansas City, USA.
                    </p>
                    <p>
                      <em>Thesis:</em> Structure Characterization of Functional
                      Materials: Toward Machine Learning Algorithms for
                      Modelling Complex Disordered Solids.
                    </p>
                    <p>
                      <em>Advisor:</em> Dr. Nathan A. Oyler
                    </p>
                    <p>
                      <em>Co-Advisor:</em> Dr. Michelle M. Paquette
                    </p>
                    <p>
                      <em>Thesis Committee Members:</em>
                      Dr. Zhonghua Peng, Dr. Xiaobo Chen and Dr. Paul Rulis
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="sub-container">
                  <p className="sub-heading">2020</p>
                  <div>
                    <p>
                      <strong>Preparing Future Faculty Certification </strong>
                    </p>
                    <p>School of Graduate Studies</p>
                    <p>
                      University of Missouri – Kansas City, Kansas City, USA.
                    </p>
                    <p>
                      <em>Mentor:</em> Dr. Nathan A. Oyler
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="sub-container">
                  <p className="sub-heading">2016</p>
                  <div>
                    <p>
                      <strong>Master of Science, Chemistry</strong>
                    </p>
                    <p>
                      Department of Chemistry, Sri Sathya Sai Institute of
                      Higher Learning, India.
                    </p>
                    <p>
                      <em>Thesis:</em>
                      High Performance Functional Biomaterials
                    </p>
                    <p>
                      <em>Advisor:</em> Dr. Janardhana Chelli
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="sub-container">
                  <p className="sub-heading">2014</p>
                  <div>
                    <p>
                      <strong>Bachelor of Science, Chemistry</strong>
                    </p>
                    <p>
                      Department of Chemistry, Sri Sathya Sai Institute of
                      Higher Learning, India.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
