import React from "react";
import physicalChemistry1 from "../src/docs/CHEM437WI_Physical_Chemistry.pdf";
import generalChemistry from "../src/docs/CHEM211L_General_Experimental_Chemistry.pdf";
import quantunChemistry from "../src/docs/CHEM5533_Quantum_Chemistry.pdf";
import physicalChemistry2 from "../src/docs/CHEM5530A_Physical_Chemistry.pdf";

export class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container padding-top-24">
        <p className="heading text-center font-weight-medium">
          Courses and Labs
        </p>
        <div className="course-container padding-top-24">
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Number and Title:
            </p>
            <p className="heading">
              CHEM 437WI Physical Chemistry Laboratory Course
            </p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">Semester and Year: </p>
            <p className="heading">Spring 2020</p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Description / Attributes:
            </p>
            <p className="heading">
              Experimental methods in physical chemistry. One-hour lecture and
              six hours laboratory each week. Satisfies writing intensive
              requirements for the B.A. or B.S. degree.{" "}
              <a href={physicalChemistry1}>More Course Information ...</a>
            </p>
          </div>
        </div>
        <div className="course-container padding-top-24">
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Number and Title:
            </p>
            <p className="heading">
              CHEM 211L Experimental General Chemistry I
            </p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">Semester and Year: </p>
            <p className="heading">Summer 2019</p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Description / Attributes:
            </p>
            <p className="heading">
              Experimental general chemistry is an introductory lab course which
              complements CHEM 211 theoretical class on various concepts of
              chemistry. It focuses on the experiential learning aspect of the
              students’ career at college. The qualitative and quantitative
              aspects of experimental chemistry will be discussed.{" "}
              <a href={generalChemistry}>More Course Information ...</a>
            </p>
          </div>
        </div>

        <div className="course-container padding-top-24">
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Number and Title:
            </p>
            <p className="heading">CHEM 5533 Quantum Chemistry</p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">Semester and Year: </p>
            <p className="heading">Fall 2019</p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Description / Attributes:
            </p>
            <p className="heading">
              Quantum Chemistry is an introductory graduate course to the
              principles of quantum mechanics applied to atoms and molecules. A
              brief outlook of fundamental theories, computational models,
              symmetry, group theory and spectroscopy will be dealt. It focuses
              on the application of quantum mechanical methods to the study of
              systems of chemical interest. Exact solutions and approximate
              methods will be discussed.{" "}
              <a href={quantunChemistry}>More Course Information ...</a>
            </p>
          </div>
        </div>

        <div className="course-container padding-top-24">
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Number and Title:
            </p>
            <p className="heading">
              Chemistry 431/5530A Physical Chemistry I Lesson Plan
            </p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">Semester and Year: </p>
            <p className="heading">Fall 2019</p>
          </div>
          <div className="subcourse-container">
            <p className="heading font-weight-medium">
              Course Description / Attributes:
            </p>
            <p className="heading">
              Physical Chemistry I Lesson Plan is is two hour per week course
              focuses on Transport of molecules in gases, Motion of molecules in
              liquids and Diffusion process.
              <a href={physicalChemistry2}>More Course Information ...</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Courses;
