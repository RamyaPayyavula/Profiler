import React from "react";
import philosophyPDF from "../src/docs/TeachingPhilosophyStatement.pdf";
import diversityPDF from "../src/docs/Sai_Diversity_Statement_Updated.pdf";
import image4 from "../src/assets/Image4.jpg";
import image5 from "../src/assets/Image5.jpg";

export class Philosophy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <h1>Statement of Teaching and Learning Philosophy</h1>
        <div className="philosophy-container">
          <article>
            My teaching philosophy is sprouted from my educational experience
            and my notion of an ideal mentor. I consider teaching is an art of
            motivating young minds and nurturing their latent talent. Teaching
            is a process of unlearning and relearning the subject along with
            students and not just passing information. Each student is unique in
            their learning curve – they require support at different levels.{" "}
            <a href={philosophyPDF}>
              For more information download the teaching philosophy statement.
            </a>
          </article>
          <img src={image4} width="300" alt="" />
        </div>

        <h1>Diversity Statement</h1>
        <div className="philosophy-container">
          <article>
            I am a first-generation student, born and brought up in a culturally
            and socio-economically diverse society. I pursued my doctoral
            program at University of Missouri-Kansas City (UMKC), far from my
            home, where I explored and experienced diverse cultures from global
            student population. I served as an international student ambassador
            at UMKC for three years, during which, I came to know about
            different ideologies and cultures while interacting with
            international and domestic students. I strongly believe that a
            diverse academic campus is beneficial place for students to learn
            new perspectives and become open-minded in this continuously
            globalizing world.{" "}
            <a href={diversityPDF}>
              For more information download the diversity statement.
            </a>
          </article>
          <img src={image5} width="300" alt="" />
        </div>
      </div>
    );
  }
}
export default Philosophy;
