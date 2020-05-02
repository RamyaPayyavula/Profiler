import React from "react";
import physicalChemistry1 from "../src/docs/CHEM437WI_Physical_Chemistry.pdf";
import generalChemistry from "../src/docs/CHEM211L_General_Experimental_Chemistry.pdf";
import quantunChemistry from "../src/docs/CHEM5533_Quantum_Chemistry.pdf";
import physicalChemistry2 from "../src/docs/CHEM5530A_Physical_Chemistry.pdf";
import LessonPlanPDF from "../src/docs/CHEM5530A_Lesson_Plan.pdf";
import RubricPDF from "../src/docs/CHEM211_Assignment_Rubric.pdf";
export class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container courses-container">
        <h1>Courses and Labs</h1>
        <div className="list-alignment-container padding-top-24 ">
          <ul>
            <li>
              <div className="sub-container">
                <p className="sub-heading">Course Number and Title:</p>
                <p>CHEM 437WI Physical Chemistry Laboratory Course</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Semester and Year:</p>
                <p>Spring 2020</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Course Description / Attributes:</p>
                <p>
                  Experimental methods in physical chemistry. One-hour lecture
                  and six hours laboratory each week. Satisfies writing
                  intensive requirements for the B.A. or B.S. degree.{" "}
                  <a href={physicalChemistry1}>More Course Information ...</a>
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">Course Number and Title:</p>
                <p>CHEM 211L Experimental General Chemistry I</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Semester and Year:</p>
                <p>Summer 2019</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Course Description / Attributes:</p>
                <p>
                  Experimental general chemistry is an introductory lab course
                  which complements CHEM 211 theoretical class on various
                  concepts of chemistry. It focuses on the experiential learning
                  aspect of the students’ career at college. The qualitative and
                  quantitative aspects of experimental chemistry will be
                  discussed.
                  <a href={generalChemistry}>More Course Information ...</a>
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">Course Number and Title:</p>
                <p>CHEM 5533 Quantum Chemistry</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Semester and Year:</p>
                <p>Fall 2019</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Course Description / Attributes:</p>
                <p>
                  Quantum Chemistry is an introductory graduate course to the
                  principles of quantum mechanics applied to atoms and
                  molecules. A brief outlook of fundamental theories,
                  computational models, symmetry, group theory and spectroscopy
                  will be dealt. It focuses on the application of quantum
                  mechanical methods to the study of systems of chemical
                  interest. Exact solutions and approximate methods will be
                  discussed.{" "}
                  <a href={quantunChemistry}>More Course Information ...</a>
                </p>
              </div>
            </li>
            <li>
              <div className="sub-container">
                <p className="sub-heading">Course Number and Title:</p>
                <p>Chemistry 431/5530A Physical Chemistry I Lesson Plan</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Semester and Year:</p>
                <p>Fall 2019</p>
              </div>
              <div className="sub-container">
                <p className="sub-heading">Course Description / Attributes:</p>
                <p>
                  Physical Chemistry I Lesson Plan is is two hour per week
                  course focuses on Transport of molecules in gases, Motion of
                  molecules in liquids and Diffusion process.
                  <a href={physicalChemistry2}>More Course Information ...</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1>Sample Lesson Plan</h1>
          <a href={LessonPlanPDF}>
            Sample lesson plan made for a lecture as part of Chemistry 431/5530A
            Physical Chemistry I course.
          </a>
        </div>
        <div>
          <h1>Sample Assignment Rubric</h1>
          <a href={RubricPDF}>
            Sample assignment rubric created as for CHEM211L General Chemistry
            laboratory course.
          </a>
        </div>
      </div>
    );
  }
}
export default Courses;
