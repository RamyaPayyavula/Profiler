import React from "react";
import image1 from "../src/assets/Image1.png";
import image2 from "../src/assets/Image2.png";
import image3 from "../src/assets/Image3.png";

export class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <h1>Research Interests</h1>
          <p className="text-align-center-mobile">
            <em>INNOVATION DRIVES RESEARCH!</em>
          </p>
          <article className="padding-top-8">
            Our research focus is on design and characterization of amorphous
            materials with an emphasis on amorphous thin films fabricated by
            plasma-enhanced chemical vapor deposition. The long-term goal is to
            develop a predictive materials design package by employing machine
            learning. Understanding the effects of fabrication parameters on
            structure and properties, especially for the amorphous materials,
            remain as an outstanding challenge. Approaching the current problem
            with fundamental principles of chemistry/physics is futile as we
            lack appropriate theoretical models. Hence, machine learning
            approach is sought to map process-structure-property relation rather
            than modelling actual processes. Primarily, as an experimental
            group, a variety of techniques including multinuclear
            multidimensional solid-state nuclear magnetic resonance
            spectroscopy, X-ray photoelectron spectroscopy, optical emission
            spectroscopy, infrared spectroscopy and isotope labelling studies
            are used to characterize materials structure. Various properties of
            amorphous materials such as optical band gap, deposition rate and
            electrical constants are also measured. Our research objective has
            tremendous implications in accelerated materials discovery and novel
            materials.
          </article>
        </div>
        <div className="reserch-interest-images">
          <figure>
            <img
              src={image1}
              className="margin-top-24"
              alt="PECVD Thin-film deposition"
            />
            <figcaption>Fig1: PECVD Thin-film deposition</figcaption>
          </figure>
          <figure>
            <img
              src={image2}
              className="margin-top-24"
              alt="Solid-state NMR of disordered materials"
            />
            <figcaption>
              Fig2: Solid-state NMR of disordered materials
            </figcaption>
          </figure>
          <figure>
            <img
              src={image3}
              className="margin-top-24"
              alt="X-ray photoelectron spectroscopy of thin-films"
            />
            <figcaption>
              Fig3: X-ray photoelectron spectroscopy of thin-films
            </figcaption>
          </figure>
        </div>

        <div className="list-alignment-container research-experience">
          <h1>Research Experience</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>
                  Department of Chemistry, University of Missouri-Kansas City,
                  USA.
                </p>
              </div>

              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2018 - current</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Synthesis of novel organic molecular precursors for PECVD.
                  Thin film characterization by ellipsometry, FT-IR, XPS, MAS
                  solid-state NMR and diffraction studies.
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>
                  Hindustan Petroleum Chemical Limited (R&amp;D) Center, India.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2017 - 2018</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Total crude oil analysis from the refineries – fractions of
                  crude oil, acid and base number, water content, sulfur
                  content, asphaltene content, viscosity, refractive index,
                  calorific value, flash point.
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>NMR Research Center, Indian Institute of Science, India.</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2016 - 2017</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Synthesis of benzoyl phenyl oxalamide derivatives to probe the
                  hydrogen bond in fluoro-organics.1-D and 2-D (HOSEY, HSQC) VT
                  NMR experiments to calculate hydrogen bond strengths Synthesis
                  of novel organic molecular precursors for PECVD and isotopes
                  enrichment.
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>
                  Department of Chemistry, Jawaharlal Nehru Center for Advanced
                  Scientific Research (JNCASR), India.
                </p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2015 - 2016</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Synthesis perylene bis-imide functional organic molecules for
                  semiconductor and molecular self- assemblies.
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>Department of Chemistry, SSSIHL</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2014 - 2015</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Brady rhizobium bacterial culture and cyclic glucan extraction
                  from the cell walls. Study of host-guest complexes of cyclic
                  glucan and betulinic acid for drug delivery applications.
                  Synthesis of thienyl chalcone derivatives based on
                  Clasein-Schmidt condensation for Non-Linear Optical (NLO) and
                  anti-bacterial study.
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Organization</em>:
                </p>
                <p>Department of Chemistry, SSSIHL</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Year</em>:
                </p>
                <p>2013 - 2014</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">
                  <em>Research</em>:
                </p>
                <p>
                  Metal ion sensing and interference studies by complex forming
                  ligands by UV and fluorescence spectroscopic studies.
                  Performance evaluation of Pd/Pt-CNT catalysts for
                  electrochemical HER from polyols by cyclic voltammetry and
                  electrochemical impedance spectroscopy.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Interests;
