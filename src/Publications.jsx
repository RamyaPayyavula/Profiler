import React from "react";

export class Publications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="list-alignment-container publications padding-top-24">
          <h1>Research Publications</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2018</p>
                <article>
                  Naga Sai Visweswar K; Swayamsiddha K;{" "}
                  <strong>Sai Siva Kumar P</strong>; Janardhana Chelli, Mukesh
                  Doble. Microbial cyclic β-(1 → 3), (1 → 6)-glucans as
                  potential drug carriers: Interaction studies between cyclic β
                  glucans isolated from Bradyrhizobium japonicum and Betulinic
                  acid.{" "}
                  <em>
                    Spectrochimica Acta Part A: Molecular and Biomolecular
                    Spectroscopy
                  </em>
                  , 203, 2018, 494-500.{" "}
                  <a href="https://doi.org/10.1016/j.saa.2018.05.106">
                    DOI: 10.1016/j.saa.2018.05.106
                  </a>
                </article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2018</p>
                <article>
                  Poshetti Dhanishta; <strong>Sai Siva Kumar P</strong>; Sandeep
                  Kumar Mishra; Suryaprakash Nagarajarao. Intramolecular
                  Hydrogen Bond Directed Stable Conformations of Benzoyl Phenyl
                  Oxalamides: Unambiguous Evidence by Extensive NMR Studies and
                  DFT Based Computations. <em>RSC Adv.</em>, 2018, 8,
                  11230–11240.
                  <a href="https://doi.org/10.1039/C8RA00357B">
                    DOI:10.1039/C8RA00357B
                  </a>
                </article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2016</p>
                <article>
                  Tejkiran P J, Brahma Teja M S,{" "}
                  <strong>Sai Siva Kumar P</strong>, Pranitha Sankar, Reji
                  Philip, Naveen S, Lokanath N K, Nageswara Rao G. D-A-π-D
                  synthetic approach for thienyl chalcones - NLO- a structure
                  activity study.{" "}
                  <em>
                    Journal of Photochemistry and Photobiology A: Chemistry
                  </em>
                  , 2016, 324, 33-39.
                  <a href="https://doi.org/10.1016/j.jphotochem.2016.03.009">
                    DOI:10.1016/j.jphotochem.2016.03.009
                  </a>
                </article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2015</p>
                <article>
                  R.S.Sai Siddhardha, M.S.Brahma Teja, P.J.Tejkiran, Susana Addo
                  Ntim, <strong>P. Sai Siva Kumar</strong>, V. Lakshminarayanan,
                  Somnath Mitra, Sai Sathish Ramamurthy. Ultra-low casting of Pt
                  based nano-ink for electrooxidation of glycerol and ethylene
                  glycol fuels in alkaline medium. <em>Fuel</em>, 2015, 158,
                  659–663.
                  <a href="https://doi.org/10.1016/j.fuel.2015.06.017">
                    DOI.org:10.1016/j.fuel.2015.06.017
                  </a>
                </article>
              </div>
            </li>
          </ul>
        </div>
        <div className="list-alignment-container publications padding-top-24">
          <h1>Conference Presentation</h1>
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2019</p>
                <article>
                  <strong>Sai Siva Kumar Pinnepalli</strong>, Christopher
                  Burkett, Jinwoo Hwang, Nathan Oyler, Michelle M. Paquette.
                  Structure Characterization of PECVD a-SiCN:H Thin Films:
                  Toward Machine Learning Algorithms for Modeling of Complex
                  Disordered Solids.
                  <em>AVS 66th International Symposium &amp; Exhibition, </em>
                  October 20-25, 2019, Ohio.
                </article>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">2014</p>
                <article>
                  Sunil A, Brahma Teja, <strong>Sai Siva Kumar P</strong>, and
                  Sundaresan C N. An azo based chemosensor for sensing Chromium
                  (III) in micellar medium.{" "}
                  <em>
                    International Conference on Global Opportunities for Latest
                    Developments in Chemistry and Technology (Gold, 2014).
                  </em>
                </article>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Publications;
